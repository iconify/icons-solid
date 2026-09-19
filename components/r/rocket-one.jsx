import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/j/j_ho0ubvu.css';
import '../../css/n/nlre1t85d.css';
import '../../css/t/tn8lj6nzi.css';
import '../../css/b/bruurubxj.css';
import '../../css/h/h46ej-b8a.css';
import '../../css/r/rfzb_jn9t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="j_ho0ubvu"/><circle class="nlre1t85d"/><path class="tn8lj6nzi"/><path class="bruurubxj"/><path class="h46ej-b8a"/><path class="rfzb_jn9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rocket-one"} {...others} />);
}

export default Component;
