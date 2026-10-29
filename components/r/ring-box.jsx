import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/br6pibbby.css';
import '../../css/g/gl-4rjbha.css';
import '../../css/i/i0zv8pz5d.css';
import '../../css/g/ge7udabzs.css';
import '../../css/f/fxmqiub4v.css';
import '../../css/r/rfjb6dbil.css';
import '../../css/k/k8i4be4he.css';
import '../../css/f/fbbzt19ch.css';
import '../../css/s/spcrfc8qp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="br6pibbby wm-shadow"/><path class="gl-4rjbha"/><path class="i0zv8pz5d"/><path class="ge7udabzs"/><path class="fxmqiub4v"/><path class="rfjb6dbil wm-shine"/><path class="k8i4be4he wm-s"/><path class="fbbzt19ch wm-s"/><path class="spcrfc8qp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ring-box"} {...others} />);
}

export default Component;
