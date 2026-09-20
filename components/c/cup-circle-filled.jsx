import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/i/i_j28db1z.css';
import '../../css/r/r7patqb0y.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGQzubZdwv"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="i_j28db1z"/><path class="r7patqb0y"/></g></mask></defs><circle mask="url(#SVGQzubZdwv)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cup-circle-filled"} {...others} />);
}

export default Component;
