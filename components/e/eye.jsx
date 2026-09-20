import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/he_-9zvcv.css';
import '../../css/o/ou-f-vnmu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="gp_8x1bzb"><path class="he_-9zvcv"/><path class="ou-f-vnmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:eye"} {...others} />);
}

export default Component;
