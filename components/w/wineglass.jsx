import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd5iybchb.css';
import '../../css/f/fq_f87pib.css';
import '../../css/t/tnqxt6brg.css';
import '../../css/z/z3at7vb6h.css';
import '../../css/g/gt39z9lnz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bd5iybchb"/><path class="fq_f87pib"/><path class="tnqxt6brg"/><path class="z3at7vb6h"/><path class="gt39z9lnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:wineglass"} {...others} />);
}

export default Component;
