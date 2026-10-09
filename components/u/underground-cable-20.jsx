import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubhg269_g.css';
import '../../css/h/hsrqj8b_j.css';
import '../../css/p/pt6rgpv5e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ubhg269_g"/><path class="hsrqj8b_j"/><path class="pt6rgpv5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:underground-cable-20"} {...others} />);
}

export default Component;
