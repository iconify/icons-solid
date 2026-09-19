import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/libtowqnn.css';
import '../../css/k/k_baq7y9r.css';
import '../../css/e/e2gmqcccl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="libtowqnn"/><path class="k_baq7y9r"/><path clip-rule="evenodd" class="e2gmqcccl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tv-retro"} {...others} />);
}

export default Component;
