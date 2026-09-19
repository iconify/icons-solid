import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-szywbkr.css';
import '../../css/v/vd60ycbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y-szywbkr"/><path class="vd60ycbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:corner-down-left"} {...others} />);
}

export default Component;
