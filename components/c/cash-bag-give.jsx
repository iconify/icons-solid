import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ku9apk8mg.css';
import '../../css/n/n4mvgmtaa.css';
import '../../css/z/zqy809bvm.css';
import '../../css/n/nhfnpacub.css';
import '../../css/r/rg-d_trth.css';
import '../../css/a/ajapefbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ku9apk8mg"/><path class="n4mvgmtaa"/><path class="zqy809bvm"/><path class="nhfnpacub"/><path class="rg-d_trth"/><path class="ajapefbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cash-bag-give"} {...others} />);
}

export default Component;
