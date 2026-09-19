import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qvc41gb5u.css';
import '../../css/y/y7qr96peg.css';
import '../../css/d/dspw8hbbc.css';
import '../../css/p/psjnwlbam.css';
import '../../css/o/ooehffciy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="qvc41gb5u"/><path class="y7qr96peg"/><path class="dspw8hbbc"/><path class="psjnwlbam"/><path class="ooehffciy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:map-draw"} {...others} />);
}

export default Component;
