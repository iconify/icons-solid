import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/o/o08e_obkq.css';
import '../../css/p/pgrcwbbij.css';
import '../../css/i/i6g2rfvcc.css';
import '../../css/t/tu6eh3b_x.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG0niErbFh"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="o08e_obkq"/><path class="pgrcwbbij"/><path class="i6g2rfvcc"/><path class="tu6eh3b_x"/></g></mask></defs><circle mask="url(#SVG0niErbFh)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:angle-up-circle-filled"} {...others} />);
}

export default Component;
