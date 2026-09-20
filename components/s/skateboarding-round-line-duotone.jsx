import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bahctlbqr.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/g/g674ibbjw.css';
import '../../css/l/lkgyzl_iz.css';
import '../../css/b/b2dg3acna.css';
import '../../css/m/mxrg5g32t.css';
import '../../css/h/hocwk9rpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bahctlbqr"/><circle class="pyd8uurcz"/><path class="g674ibbjw"/><path class="lkgyzl_iz"/><path class="b2dg3acna"/><path class="mxrg5g32t"/><path class="hocwk9rpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-round-line-duotone"} {...others} />);
}

export default Component;
