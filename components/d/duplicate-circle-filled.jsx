import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/v/v99w30bqb.css';
import '../../css/j/j__6nacqt.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGGbNkKcGS"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="v99w30bqb"/><path class="j__6nacqt"/></g></mask></defs><circle mask="url(#SVGGbNkKcGS)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:duplicate-circle-filled"} {...others} />);
}

export default Component;
