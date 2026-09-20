import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ujb527bml.css';
import '../../css/e/ejz5epb9o.css';
import '../../css/p/p2s_4bb5d.css';
import '../../css/z/zlkv9tksq.css';
import '../../css/y/ybv2_mbnh.css';
import '../../css/u/u6st_da8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ujb527bml"/><path class="ejz5epb9o"/><path class="p2s_4bb5d"/><path class="zlkv9tksq"/><path class="ybv2_mbnh"/><path class="u6st_da8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:bug-browser-warning"} {...others} />);
}

export default Component;
