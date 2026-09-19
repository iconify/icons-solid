import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkbae3hss.css';
import '../../css/k/ki89_nbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkbae3hss"/><path class="ki89_nbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:volume-high"} {...others} />);
}

export default Component;
