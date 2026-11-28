import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6c7hlb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z6c7hlb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:volume-mute-solid"} {...others} />);
}

export default Component;
