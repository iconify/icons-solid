import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rslo40inv.css';
import '../../css/r/rwsq_83pk.css';
import '../../css/w/warcgn-bq.css';
import '../../css/o/ov0_cbb6t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rslo40inv"/><path class="rwsq_83pk"/><path class="warcgn-bq"/><path class="ov0_cbb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:creditcard"} {...others} />);
}

export default Component;
