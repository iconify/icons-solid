import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwoyjqbns.css';
import '../../css/h/h0i-lgbdj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cwoyjqbns"/><path class="h0i-lgbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-bus-20-bold"} {...others} />);
}

export default Component;
