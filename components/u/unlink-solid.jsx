import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q39dj8bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q39dj8bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:unlink-solid"} {...others} />);
}

export default Component;
