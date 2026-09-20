import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geicrrbfi.css';
import '../../css/l/lxf8azbfy.css';
import '../../css/z/z08r7ybhk.css';
import '../../css/u/uf4od7e4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="geicrrbfi"/><path class="lxf8azbfy"/><path class="z08r7ybhk"/><path class="uf4od7e4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bomb2-duotone"} {...others} />);
}

export default Component;
