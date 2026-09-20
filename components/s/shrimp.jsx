import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4jd2xbnq.css';
import '../../css/o/oi7b1qb3k.css';
import '../../css/s/s23hb1cge.css';
import '../../css/m/mbu5twb9m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p4jd2xbnq"/><path class="oi7b1qb3k"/><path class="s23hb1cge"/><path class="mbu5twb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shrimp"} {...others} />);
}

export default Component;
