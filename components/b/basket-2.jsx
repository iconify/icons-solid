import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/h/hu15sobbt.css';
import '../../css/x/x1b7szbxg.css';
import '../../css/w/we6ub35uf.css';
import '../../css/t/tv81v4brz.css';
import '../../css/i/i9z5rue3q.css';
import '../../css/e/eziiygzee.css';
import '../../css/r/reau84bqa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="hu15sobbt"/><path class="x1b7szbxg"/><path class="we6ub35uf"/><path class="tv81v4brz"/><path class="i9z5rue3q"/><path class="eziiygzee"/><path class="reau84bqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:basket-2"} {...others} />);
}

export default Component;
