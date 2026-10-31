import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/t/t5w5_xbbl.css';
import '../../css/q/q_lbhkfoq.css';
import '../../css/o/okt7s3bng.css';
import '../../css/z/zaeafjj6c.css';
import '../../css/r/r62m6t47e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="t5w5_xbbl"/><path class="q_lbhkfoq"/><path class="okt7s3bng"/><path class="zaeafjj6c"/><path class="r62m6t47e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:oxygen-tank-pop"} {...others} />);
}

export default Component;
