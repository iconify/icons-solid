import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f10v7ra8f.css';
import '../../css/z/z7sd0d95r.css';
import '../../css/o/owpfkacsr.css';
import '../../css/y/yk700ug_c.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/c/cyf_nebvx.css';
import '../../css/e/eo5m75-is.css';
import '../../css/o/orwotsbei.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f10v7ra8f"/><path class="z7sd0d95r"/><path class="owpfkacsr"/><path class="yk700ug_c"/><g class="doj9dq_jg"><path class="cyf_nebvx"/><path class="eo5m75-is"/><path class="orwotsbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tumbler-glass"} {...others} />);
}

export default Component;
