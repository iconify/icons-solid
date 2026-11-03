import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhdeblbtp.css';
import '../../css/h/h8edz9ogb.css';
import '../../css/p/p2s5fbblg.css';
import '../../css/b/b7tbiwbrt.css';
import '../../css/r/rwbifmbkz.css';
import '../../css/d/dqibh3x7u.css';
import '../../css/i/ip1i0mbkx.css';
import '../../css/r/rkhp9jxfn.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="hhdeblbtp"/><path class="h8edz9ogb"/><path class="p2s5fbblg"/><path class="b7tbiwbrt"/><circle class="rwbifmbkz"/><circle class="dqibh3x7u"/><circle transform="rotate(-45 1307.71 717.868)" class="ip1i0mbkx"/><circle class="rkhp9jxfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:romm"} {...others} />);
}

export default Component;
