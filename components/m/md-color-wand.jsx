import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-_5-mrpk.css';
import '../../css/q/q7k0l4b2k.css';
import '../../css/o/oq4jz60we.css';
import '../../css/u/u_bm67b6o.css';
import '../../css/y/y_v93wbnp.css';
import '../../css/k/koqvq378m.css';
import '../../css/k/km3o-jb1t.css';
import '../../css/k/k5hbpcc-v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t-_5-mrpk"/><path class="q7k0l4b2k"/><path class="oq4jz60we"/><path class="u_bm67b6o"/><path class="y_v93wbnp"/><path class="koqvq378m"/><path class="km3o-jb1t"/><path class="k5hbpcc-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-color-wand"} {...others} />);
}

export default Component;
