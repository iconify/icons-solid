import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wf0awcb4d.css';
import '../../css/w/w_jkxrb5x.css';
import '../../css/w/wbyajk8_c.css';
import '../../css/g/g-kpebb9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="wf0awcb4d"/><path class="w_jkxrb5x"/><path class="wbyajk8_c"/><path class="g-kpebb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wrong-user"} {...others} />);
}

export default Component;
