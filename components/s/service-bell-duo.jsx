import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8ryl_bho.css';
import '../../css/y/ywbxttbrs.css';
import '../../css/n/nb84o4bmx.css';
import '../../css/n/nxtigc8qe.css';
import '../../css/z/z8y16db2f.css';
import '../../css/q/qqixx5bvv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k8ryl_bho"/><path class="ywbxttbrs"/><path class="nb84o4bmx"/><path class="nxtigc8qe"/><path class="z8y16db2f"/><path class="qqixx5bvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:service-bell-duo"} {...others} />);
}

export default Component;
