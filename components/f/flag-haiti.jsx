import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/h/h8ttso15c.css';
import '../../css/b/bh8xyebtr.css';
import '../../css/a/axwok6lod.css';
import '../../css/s/sc7xhfg8p.css';
import '../../css/l/lw5x57b-n.css';
import '../../css/y/yedj3vbda.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="h8ttso15c"/><path class="bh8xyebtr"/><path class="axwok6lod"/><path class="sc7xhfg8p"/><path class="lw5x57b-n"/><path class="yedj3vbda"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-haiti"} {...others} />);
}

export default Component;
