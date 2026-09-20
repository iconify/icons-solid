import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yv051_8ga.css';
import '../../css/t/thg8cjb6f.css';
import '../../css/k/ke1zs1m5n.css';
import '../../css/b/bfk3zd2um.css';
import '../../css/v/vigcvrb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yv051_8ga"/><path class="thg8cjb6f"/><path class="ke1zs1m5n"/><path class="bfk3zd2um"/><path class="vigcvrb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gas-station-bold-duotone"} {...others} />);
}

export default Component;
