import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzedr8b4v.css';
import '../../css/c/c7t37fq_c.css';
import '../../css/e/e_lx61bbx.css';
import '../../css/a/aoh1nrwpm.css';
import '../../css/b/b-7vt5iyv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kzedr8b4v"/><path class="c7t37fq_c"/><path class="e_lx61bbx"/><path class="aoh1nrwpm"/><path class="b-7vt5iyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dove"} {...others} />);
}

export default Component;
