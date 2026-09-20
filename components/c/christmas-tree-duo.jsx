import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/b/bh1n1e5pw.css';
import '../../css/a/azwww1b8x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path clip-rule="evenodd" class="bh1n1e5pw"/><path clip-rule="evenodd" class="azwww1b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:christmas-tree-duo"} {...others} />);
}

export default Component;
