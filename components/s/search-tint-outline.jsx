import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptk67nbuj.css';
import '../../css/q/qxpfaf6dk.css';
import '../../css/q/qle0cdbgv.css';
import '../../css/e/e0i688bvf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ptk67nbuj"/><path clip-rule="evenodd" class="qxpfaf6dk"/><path class="qle0cdbgv"/><path clip-rule="evenodd" class="e0i688bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:search-tint-outline"} {...others} />);
}

export default Component;
