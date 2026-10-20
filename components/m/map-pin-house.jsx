import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rp5kndbph.css';
import '../../css/o/oln7pibrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rp5kndbph"/><path class="oln7pibrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:map-pin-house"} {...others} />);
}

export default Component;
