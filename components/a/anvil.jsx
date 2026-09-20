import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/m/mmlftebmb.css';
import '../../css/w/wozf068ts.css';
import '../../css/u/ur4e5h_9p.css';
import '../../css/l/l7kwnjeih.css';
import '../../css/q/qiogkybux.css';
import '../../css/f/fa5-txmef.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="mmlftebmb"/><path class="wozf068ts"/><path class="ur4e5h_9p"/><path class="l7kwnjeih"/><path class="qiogkybux"/><path class="fa5-txmef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:anvil"} {...others} />);
}

export default Component;
