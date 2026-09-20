import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m937v_b8a.css';
import '../../css/f/fhb3vbc9r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="m937v_b8a"/><path class="fhb3vbc9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:browser-window"} {...others} />);
}

export default Component;
