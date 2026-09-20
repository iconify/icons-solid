import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/y/y2q3s8nmt.css';
import '../../css/f/f1d7bubhk.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGUSbGUdwk"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="y2q3s8nmt"/><path class="f1d7bubhk"/></g></mask></defs><circle mask="url(#SVGUSbGUdwk)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:loop-minus-circle-filled"} {...others} />);
}

export default Component;
