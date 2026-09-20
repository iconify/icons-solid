import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/k/kax-q9blx.css';
import '../../css/h/hsit5q6hy.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGMOmoucTs"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="kax-q9blx"/><path class="hsit5q6hy"/></g></mask></defs><circle mask="url(#SVGMOmoucTs)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:triangle-right-filled-circle-filled"} {...others} />);
}

export default Component;
