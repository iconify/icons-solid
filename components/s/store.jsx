import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ixdfdx08q.css';
import '../../css/x/x40yfzbco.css';
import '../../css/q/qot1llnbn.css';
import '../../css/p/pme47bwio.css';
import '../../css/f/fstj6acnv.css';
import '../../css/s/s_9gmmbkn.css';
import '../../css/v/vvv6xw2xo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ixdfdx08q wm-shadow"/><path class="wm-shadow x40yfzbco"/><path class="qot1llnbn"/><path class="pme47bwio"/><path class="fstj6acnv"/><path class="s_9gmmbkn"/><path class="vvv6xw2xo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:store"} {...others} />);
}

export default Component;
