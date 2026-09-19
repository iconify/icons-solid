import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys5md9n0w.css';
import '../../css/z/zkrbpcbvx.css';
import '../../css/k/k_gphygrl.css';
import '../../css/f/fktx6ibcn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ys5md9n0w"/><path class="zkrbpcbvx"/><path class="k_gphygrl"/><path clip-rule="evenodd" class="fktx6ibcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:globe-stand-middle"} {...others} />);
}

export default Component;
