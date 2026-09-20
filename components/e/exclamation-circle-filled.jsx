import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/s/sl1u3-b3g.css';
import '../../css/o/o9rkjl_xn.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGz75UHd9O"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="sl1u3-b3g"/><path class="o9rkjl_xn"/></g></mask></defs><circle mask="url(#SVGz75UHd9O)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:exclamation-circle-filled"} {...others} />);
}

export default Component;
