import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a3qp0-bkx.css';
import '../../css/n/n2tvifbxw.css';
import '../../css/y/yfpnkkzom.css';
import '../../css/o/ov4iizb5g.css';
import '../../css/z/zdekds18k.css';
import '../../css/l/lruok7bvl.css';
import '../../css/n/nwe58ub8q.css';
import '../../css/u/u7llbrbpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a3qp0-bkx"/><path class="n2tvifbxw"/><path class="yfpnkkzom"/><path class="ov4iizb5g"/><path class="zdekds18k"/><path class="lruok7bvl"/><path class="nwe58ub8q"/><path class="u7llbrbpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-line-duotone"} {...others} />);
}

export default Component;
