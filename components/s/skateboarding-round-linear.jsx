import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bahctlbqr.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/g/g674ibbjw.css';
import '../../css/i/iucsj8b6e.css';
import '../../css/n/n9vqu6frf.css';
import '../../css/k/kg7-urb4q.css';
import '../../css/b/b96xznzsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bahctlbqr"/><circle class="pyd8uurcz"/><path class="g674ibbjw"/><path class="iucsj8b6e"/><path class="n9vqu6frf"/><path class="kg7-urb4q"/><path class="b96xznzsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-round-linear"} {...others} />);
}

export default Component;
