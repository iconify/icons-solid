import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tn9td58ck.css';
import '../../css/k/k452hcbmf.css';
import '../../css/c/c2-vn7ifl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tn9td58ck"/><path clip-rule="evenodd" class="k452hcbmf"/><path class="c2-vn7ifl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:dollar-bill-wave"} {...others} />);
}

export default Component;
