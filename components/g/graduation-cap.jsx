import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_1627bue.css';
import '../../css/q/qatg1tb-z.css';
import '../../css/b/bpawmfb4h.css';
import '../../css/h/hi08am92c.css';
import '../../css/o/oq7ps8cto.css';
import '../../css/f/f45euabxj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a_1627bue"/><path class="qatg1tb-z"/><path class="bpawmfb4h"/><path class="hi08am92c"/><path class="oq7ps8cto"/><path class="f45euabxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:graduation-cap"} {...others} />);
}

export default Component;
