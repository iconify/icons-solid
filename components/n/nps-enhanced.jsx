import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzn1qccgr.css';
import '../../css/x/xx9pytb-r.css';
import '../../css/d/dx-ov3jnn.css';
import '../../css/l/l6cpni5in.css';
import '../../css/k/kmifr3gdo.css';
import '../../css/r/rwvqo8hbv.css';
import '../../css/j/jj4qd2ffz.css';
import '../../css/w/wmiiobcjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kzn1qccgr"/><path class="xx9pytb-r"/><path class="dx-ov3jnn"/><path class="l6cpni5in"/><path class="kmifr3gdo"/><path class="rwvqo8hbv"/><path class="jj4qd2ffz"/><path class="wmiiobcjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nps-enhanced"} {...others} />);
}

export default Component;
