import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0m1h-b7b.css';
import '../../css/z/ziz_ldx2p.css';
import '../../css/j/jgda5jb8u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k0m1h-b7b"/><path class="ziz_ldx2p"/><path clip-rule="evenodd" class="jgda5jb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:orientation-portrait-flat"} {...others} />);
}

export default Component;
