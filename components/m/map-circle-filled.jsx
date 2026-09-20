import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/l/la8juur7d.css';
import '../../css/l/lhvh71b1a.css';
import '../../css/u/ux0kji9-q.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGEB03Feta"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="la8juur7d"/><path clip-rule="evenodd" class="lhvh71b1a"/><path class="ux0kji9-q"/></g></mask></defs><circle mask="url(#SVGEB03Feta)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:map-circle-filled"} {...others} />);
}

export default Component;
