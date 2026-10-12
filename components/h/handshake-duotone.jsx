import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zq9754muo.css';
import '../../css/f/f4_1a0dxw.css';
import '../../css/s/sh39dzt2r.css';
import '../../css/y/ybmaxr99i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zq9754muo"/><path class="f4_1a0dxw"/><path class="sh39dzt2r"/><path class="ybmaxr99i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:handshake-duotone"} {...others} />);
}

export default Component;
