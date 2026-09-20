import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d41t4hb4s.css';
import '../../css/q/qm5nf-7wy.css';
import '../../css/k/k6pdl9s_w.css';
import '../../css/p/p5n3zo29p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d41t4hb4s"/><path class="qm5nf-7wy"/><path class="k6pdl9s_w"/><path clip-rule="evenodd" class="p5n3zo29p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:router-filled"} {...others} />);
}

export default Component;
