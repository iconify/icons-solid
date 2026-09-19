import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/gwp2jwycy.css';
import '../../css/p/pas470bde.css';
import '../../css/d/dt-wanbxy.css';
import '../../css/a/ay-mwcklb.css';
import '../../css/o/o_ea411kg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="gwp2jwycy"/><path class="pas470bde"/><path class="dt-wanbxy"/><path class="ay-mwcklb"/><path class="o_ea411kg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:connection-box"} {...others} />);
}

export default Component;
