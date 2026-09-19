import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zx_glyhpr.css';
import '../../css/l/lse2-h-0g.css';
import '../../css/m/mlsnkzbru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><rect class="zx_glyhpr"/><rect class="lse2-h-0g"/><rect class="mlsnkzbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:reports-solid"} {...others} />);
}

export default Component;
