import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td9q1sb4m.css';
import '../../css/r/r74_arb3k.css';
import '../../css/m/m-5l6lb7i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="td9q1sb4m"/><path class="r74_arb3k"/><path class="m-5l6lb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rake-20"} {...others} />);
}

export default Component;
