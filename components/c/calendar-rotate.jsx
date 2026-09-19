import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuwd7bcos.css';
import '../../css/o/on2pvo0gv.css';
import '../../css/l/lx_zx5b2t.css';
import '../../css/p/pk5i1dr7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kuwd7bcos"/><path class="on2pvo0gv"/><path class="lx_zx5b2t"/><path class="pk5i1dr7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:calendar-rotate"} {...others} />);
}

export default Component;
