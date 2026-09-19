import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0h-smbqd.css';
import '../../css/d/dlr0psbka.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="q0h-smbqd"/><path clip-rule="evenodd" class="dlr0psbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:folder-open-1-bold"} {...others} />);
}

export default Component;
