import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdw_qcc8y.css';
import '../../css/i/iqi8kebmf.css';
import '../../css/q/qn0ghsdff.css';
import '../../css/e/eyksnnbax.css';
import '../../css/n/nz9_1bc9d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qdw_qcc8y"/><path class="iqi8kebmf"/><path class="qn0ghsdff"/><path class="eyksnnbax"/><path class="nz9_1bc9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:face-with-peeking-eye"} {...others} />);
}

export default Component;
