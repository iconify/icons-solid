import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/ul-6me-st.css';
import '../../css/y/yx1oo1bfe.css';
import '../../css/c/czrcyyb3k.css';
import '../../css/p/p54e5wqoe.css';
import '../../css/a/a-qkwdp1e.css';
import '../../css/t/tgy9b5b4p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ul-6me-st"/><path class="yx1oo1bfe"/><path class="czrcyyb3k"/><path class="p54e5wqoe"/><circle class="a-qkwdp1e"/><circle class="tgy9b5b4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list-fail"} {...others} />);
}

export default Component;
