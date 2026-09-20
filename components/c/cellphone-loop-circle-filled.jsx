import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/j/j3037bcit.css';
import '../../css/o/os-ibivrc.css';
import '../../css/g/gcjffpk1n.css';
import '../../css/y/y41r9ilfq.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG7JA66b8K"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="j3037bcit"/><path clip-rule="evenodd" class="os-ibivrc"/><path clip-rule="evenodd" class="gcjffpk1n"/><path clip-rule="evenodd" class="y41r9ilfq"/></g></mask></defs><circle mask="url(#SVG7JA66b8K)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cellphone-loop-circle-filled"} {...others} />);
}

export default Component;
