import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/w/w22uq_qan.css';
import '../../css/a/apik_nb1s.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGnkL8tb3e"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="w22uq_qan"/><path class="apik_nb1s"/></g></mask></defs><circle mask="url(#SVGnkL8tb3e)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:share-android-circle-filled"} {...others} />);
}

export default Component;
