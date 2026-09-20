import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to5_hpm1w.css';
import '../../css/h/h3bp_99ap.css';
import '../../css/o/obovem3ey.css';

const viewBox = {"width":340,"height":340};
const content = `<g class="to5_hpm1w"><path clip-rule="evenodd" class="h3bp_99ap"/><path class="obovem3ey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wakatime-light"} {...others} />);
}

export default Component;
