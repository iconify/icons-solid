import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfyaucbbp.css';
import '../../css/c/cznraqbah.css';
import '../../css/w/w0i8w12sf.css';
import '../../css/d/dxv3vxb1e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vfyaucbbp"/><path class="cznraqbah"/><path clip-rule="evenodd" class="w0i8w12sf"/><path class="dxv3vxb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:inbox-1"} {...others} />);
}

export default Component;
