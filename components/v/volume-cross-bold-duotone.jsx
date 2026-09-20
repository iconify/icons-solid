import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dagas5qlh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d7t6d7u5j.css';
import '../../css/b/bfe5y7nus.css';
import '../../css/s/suoqkgb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dagas5qlh"/><g class="mc2zb0bvp"><path class="d7t6d7u5j"/><path class="bfe5y7nus"/><path class="suoqkgb5k"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-cross-bold-duotone"} {...others} />);
}

export default Component;
