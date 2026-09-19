import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qf894pveg.css';
import '../../css/p/pxj_3ibfa.css';
import '../../css/r/rbdae1bqv.css';
import '../../css/e/e3ccuccug.css';
import '../../css/x/xs3pgtb2a.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qf894pveg"/><path class="pxj_3ibfa"/><path class="rbdae1bqv"/><path class="e3ccuccug"/><path class="xs3pgtb2a"/><path class="cfx1q448n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clapping-hands-light"} {...others} />);
}

export default Component;
