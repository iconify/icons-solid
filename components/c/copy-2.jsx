import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2t3dco8k.css';
import '../../css/u/u-bmmzb2t.css';
import '../../css/f/f5lhneb6r.css';
import '../../css/a/afezo2lly.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k2t3dco8k"/><path class="u-bmmzb2t"/><path class="f5lhneb6r"/><path class="afezo2lly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:copy-2"} {...others} />);
}

export default Component;
