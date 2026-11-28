import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwikjcbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwikjcbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chevron-double-right-solid"} {...others} />);
}

export default Component;
