import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/t/td-d9yzhb.css';
import '../../css/v/v7hcqlbvq.css';
import '../../css/r/rhbbopbqk.css';
import '../../css/h/h80afpafx.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGsRLBpbhx"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="td-d9yzhb"/><path class="v7hcqlbvq"/><path class="rhbbopbqk"/><path class="h80afpafx"/></g></mask></defs><circle mask="url(#SVGsRLBpbhx)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cloud-up-circle-filled"} {...others} />);
}

export default Component;
