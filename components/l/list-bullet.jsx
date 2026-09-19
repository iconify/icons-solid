import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0m365bkk.css';
import '../../css/x/x4edefbgr.css';
import '../../css/k/kkxmdkb-g.css';
import '../../css/y/yd79u1b7a.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="o0m365bkk"/><circle class="x4edefbgr"/><circle class="kkxmdkb-g"/><circle class="yd79u1b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:list-bullet"} {...others} />);
}

export default Component;
