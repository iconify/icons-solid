import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_xb_19lg.css';
import '../../css/h/hnif_sbez.css';
import '../../css/n/n1y6j8bff.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a_xb_19lg"/><path class="hnif_sbez"/><path class="n1y6j8bff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:login-1"} {...others} />);
}

export default Component;
