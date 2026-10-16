import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqby4c3ii.css';
import '../../css/s/sz385ccax.css';
import '../../css/p/pofuqcb8y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gqby4c3ii"/><path class="sz385ccax"/><path class="pofuqcb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:freezing-rain-20"} {...others} />);
}

export default Component;
