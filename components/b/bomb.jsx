import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1sl6ucef.css';
import '../../css/h/hajrmjvuo.css';
import '../../css/o/o8sexzb6d.css';
import '../../css/n/n6a3hv_ac.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j1sl6ucef"/><path class="hajrmjvuo"/><path class="o8sexzb6d"/><ellipse transform="rotate(156.273 138.27 186.36)" class="n6a3hv_ac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bomb"} {...others} />);
}

export default Component;
