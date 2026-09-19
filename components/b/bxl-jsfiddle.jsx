import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr2-x0j6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xr2-x0j6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-jsfiddle"} {...others} />);
}

export default Component;
