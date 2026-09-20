import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc6nhhbik.css';
import '../../css/i/i0n9u8biz.css';
import '../../css/x/x3bg3uy2c.css';
import '../../css/a/a9mvgcnyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vc6nhhbik"/><path class="i0n9u8biz"/><path class="x3bg3uy2c"/><path clip-rule="evenodd" class="a9mvgcnyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-code-outline"} {...others} />);
}

export default Component;
