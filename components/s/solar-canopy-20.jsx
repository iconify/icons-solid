import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceex6qbaz.css';
import '../../css/c/chgc5thhd.css';
import '../../css/h/hyns0sb6c.css';
import '../../css/d/ds_4hp33i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ceex6qbaz"/><path class="chgc5thhd"/><path class="hyns0sb6c"/><path class="ds_4hp33i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-canopy-20"} {...others} />);
}

export default Component;
