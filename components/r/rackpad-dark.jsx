import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dedb0yb3v.css';
import '../../css/p/ps0tp4fxx.css';
import '../../css/s/s2cmtxptk.css';
import '../../css/t/tz3w3ibkq.css';
import '../../css/q/qwa522b1d.css';
import '../../css/e/evkrbd45m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dedb0yb3v"/><path class="ps0tp4fxx"/><path class="s2cmtxptk"/><path class="tz3w3ibkq"/><path class="qwa522b1d"/><path class="evkrbd45m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackpad-dark"} {...others} />);
}

export default Component;
