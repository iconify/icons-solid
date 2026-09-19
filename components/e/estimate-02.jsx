import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tyyc_hb3b.css';
import '../../css/k/kgb_qyblb.css';
import '../../css/r/r3xj1zbve.css';
import '../../css/w/wphsgxkzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tyyc_hb3b"/><path class="kgb_qyblb"/><circle class="r3xj1zbve"/><path class="wphsgxkzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:estimate-02"} {...others} />);
}

export default Component;
