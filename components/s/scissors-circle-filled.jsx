import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/f/f7m35vdiv.css';
import '../../css/s/szoo33b0d.css';
import '../../css/h/hi7mdyluz.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGf0ZqoeiK"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="f7m35vdiv"/><path class="szoo33b0d"/><path class="hi7mdyluz"/></g></mask></defs><circle mask="url(#SVGf0ZqoeiK)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:scissors-circle-filled"} {...others} />);
}

export default Component;
