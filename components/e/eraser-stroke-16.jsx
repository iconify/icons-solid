import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rh2ocrb7y.css';
import '../../css/s/squ55obdc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect transform="rotate(-45 8 8)" class="rh2ocrb7y"/><path class="squ55obdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eraser-stroke-16"} {...others} />);
}

export default Component;
