import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfzk-m7le.css';
import '../../css/s/s4tacdvsa.css';
import '../../css/w/wabb2o_wh.css';
import '../../css/g/gsl21kb0m.css';
import '../../css/c/cijt8bpva.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nfzk-m7le"/><path class="s4tacdvsa"/><path class="wabb2o_wh"/><path class="gsl21kb0m"/><path class="cijt8bpva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:island-20-bold"} {...others} />);
}

export default Component;
