import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vou3r2ifc.css';
import '../../css/t/t17ta3bli.css';
import '../../css/n/nxbj7m54b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vou3r2ifc"/><path class="t17ta3bli"/><path class="nxbj7m54b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:train-duo"} {...others} />);
}

export default Component;
