import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/p/pszy_4b0t.css';
import '../../css/j/j4-krt-9e.css';
import '../../css/v/v2z71xb6c.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGXogDDeUm"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="pszy_4b0t"/><path clip-rule="evenodd" class="j4-krt-9e"/><path clip-rule="evenodd" class="v2z71xb6c"/></g></mask></defs><circle mask="url(#SVGXogDDeUm)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:question-circle-filled"} {...others} />);
}

export default Component;
