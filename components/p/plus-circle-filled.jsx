import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/j/j-hc1kblh.css';
import '../../css/t/tvg4rybvu.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGXJkKzvJi"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path class="j-hc1kblh"/><path class="tvg4rybvu"/></g></mask></defs><circle mask="url(#SVGXJkKzvJi)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:plus-circle-filled"} {...others} />);
}

export default Component;
