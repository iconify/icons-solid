import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdsdlop1e.css';
import '../../css/h/hs4t9rboz.css';
import '../../css/i/izesb0brw.css';
import '../../css/q/q5le56jah.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zdsdlop1e"/><path class="hs4t9rboz"/><path class="izesb0brw"/><path class="q5le56jah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:threat-phone"} {...others} />);
}

export default Component;
