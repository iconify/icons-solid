import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m-nsi_b_c.css';
import '../../css/w/wwon6vdey.css';
import '../../css/p/pvvm-_aao.css';
import '../../css/j/j0c87kbst.css';
import '../../css/b/brwkhdb2p.css';
import '../../css/q/qeq866btb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="m-nsi_b_c"/><path class="wwon6vdey"/><path class="pvvm-_aao"/><path class="j0c87kbst"/><path class="brwkhdb2p"/><path class="qeq866btb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:viewfinder"} {...others} />);
}

export default Component;
