import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syzn22bzn.css';
import '../../css/h/h8gtb570e.css';
import '../../css/i/ink52nboi.css';
import '../../css/e/e5l4xebcl.css';
import '../../css/s/shpx25blk.css';
import '../../css/r/rubiglv1x.css';
import '../../css/y/yjtqk3b1k.css';
import '../../css/n/n9alqcedq.css';
import '../../css/e/ee0dafu1i.css';
import '../../css/e/exowcgbyq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="syzn22bzn"/><path class="h8gtb570e"/><path class="ink52nboi"/><path class="e5l4xebcl"/><path class="shpx25blk"/><path class="rubiglv1x"/><path class="yjtqk3b1k"/><path class="n9alqcedq"/><path class="ee0dafu1i"/><path class="exowcgbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:custard"} {...others} />);
}

export default Component;
