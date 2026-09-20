import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1k4gvb1u.css';
import '../../css/b/bln0thb3j.css';
import '../../css/p/p7nvvwbox.css';
import '../../css/a/aag6lcghf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r1k4gvb1u"/><path class="bln0thb3j"/><path class="p7nvvwbox"/><path class="aag6lcghf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:checkup-medical-report-clipboard"} {...others} />);
}

export default Component;
