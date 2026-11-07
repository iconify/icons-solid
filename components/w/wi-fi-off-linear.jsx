import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/e/e_tokccvb.css';
import '../../css/a/a9thqaciu.css';
import '../../css/s/spd299bvi.css';
import '../../css/w/wnncpz6rd.css';
import '../../css/j/jwbtv1a5i.css';
import '../../css/z/zj2p4py0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="e_tokccvb"/><path class="a9thqaciu"/><path class="spd299bvi"/><path class="wnncpz6rd"/><path class="jwbtv1a5i"/><path class="zj2p4py0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-off-linear"} {...others} />);
}

export default Component;
