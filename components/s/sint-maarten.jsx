import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpcpne6is.css';
import '../../css/b/b23y6vmnr.css';
import '../../css/s/sg5lsqner.css';
import '../../css/z/z4-s57dxp.css';
import '../../css/n/naw60hbhj.css';
import '../../css/h/hd5bkdb6q.css';
import '../../css/h/h1ajtzbby.css';
import '../../css/n/nl6t6_96r.css';
import '../../css/n/n46efzdyg.css';
import '../../css/c/c36t0zbfz.css';
import '../../css/k/k843oac8h.css';
import '../../css/o/o7optcr8v.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="dpcpne6is"/><path class="b23y6vmnr"/><path class="sg5lsqner"/><path class="z4-s57dxp"/><path class="naw60hbhj"/><path class="hd5bkdb6q"/><path class="h1ajtzbby"/><path class="nl6t6_96r"/><path class="n46efzdyg"/><path class="c36t0zbfz"/><path class="k843oac8h"/><path class="o7optcr8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:sint-maarten"} {...others} />);
}

export default Component;
