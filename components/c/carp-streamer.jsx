import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv6wbt7vy.css';
import '../../css/n/ngibtbc4u.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/a/a3y_n_0wd.css';
import '../../css/i/i4ibnvhup.css';
import '../../css/a/ay6sqcctf.css';
import '../../css/j/jhr2umb1s.css';
import '../../css/o/obj718big.css';
import '../../css/v/vorz_abqq.css';
import '../../css/r/r2ta7x4le.css';
import '../../css/l/lqu7b43pq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pv6wbt7vy"/><path class="ngibtbc4u"/><g class="hzhb0bcwn"><path class="a3y_n_0wd"/><circle class="i4ibnvhup"/><circle class="ay6sqcctf"/><circle class="jhr2umb1s"/><path class="obj718big"/><circle class="vorz_abqq"/><path class="r2ta7x4le"/><path class="lqu7b43pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:carp-streamer"} {...others} />);
}

export default Component;
