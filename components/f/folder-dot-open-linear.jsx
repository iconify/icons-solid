import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/svw4_lb5n.css';
import '../../css/o/o4he8kb_o.css';
import '../../css/z/zn-yurbog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="svw4_lb5n"/><path class="o4he8kb_o"/><path class="zn-yurbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-dot-open-linear"} {...others} />);
}

export default Component;
