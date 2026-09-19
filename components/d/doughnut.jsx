import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbqiyh6ai.css';
import '../../css/s/sn37h2nqt.css';
import '../../css/z/zm2n4fowp.css';
import '../../css/b/by4oidcmc.css';
import '../../css/h/h7qghacaq.css';
import '../../css/c/cnhuqhbyr.css';
import '../../css/s/sd6vlkjdi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xbqiyh6ai"/><path class="sn37h2nqt"/><path class="zm2n4fowp"/><path class="by4oidcmc"/><path class="h7qghacaq"/><path class="cnhuqhbyr"/><path class="sd6vlkjdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:doughnut"} {...others} />);
}

export default Component;
