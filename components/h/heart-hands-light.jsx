import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mwp_oydnr.css';
import '../../css/x/x7fo1-u6w.css';
import '../../css/e/era4mkbci.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mwp_oydnr"/><path clip-rule="evenodd" class="x7fo1-u6w"/><path class="era4mkbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:heart-hands-light"} {...others} />);
}

export default Component;
