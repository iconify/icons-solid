import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/k/kelkkobbo.css';
import '../../css/f/fi_-pccws.css';
import '../../css/e/e-yamx98d.css';
import '../../css/a/a5mim-b8p.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGESSazcHM"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="kelkkobbo"/><path class="fi_-pccws"/><path clip-rule="evenodd" class="e-yamx98d"/><path clip-rule="evenodd" class="a5mim-b8p"/></g></mask></defs><circle mask="url(#SVGESSazcHM)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:photo-circle-filled"} {...others} />);
}

export default Component;
