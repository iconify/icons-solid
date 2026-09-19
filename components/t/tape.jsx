import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/t/tllbsg4up.css';
import '../../css/m/mail3acsf.css';
import '../../css/k/kcsygmb2d.css';
import '../../css/z/zxu45kbfa.css';
import '../../css/x/xdta9nrsb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="tllbsg4up"/><path clip-rule="evenodd" class="mail3acsf"/><path class="kcsygmb2d"/><path class="zxu45kbfa"/><path class="xdta9nrsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tape"} {...others} />);
}

export default Component;
