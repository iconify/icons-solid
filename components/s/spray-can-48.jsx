import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz7_1-2mp.css';
import '../../css/n/nu73lppyk.css';
import '../../css/q/qffxtubht.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fz7_1-2mp"/><path class="nu73lppyk"/><path class="qffxtubht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spray-can-48"} {...others} />);
}

export default Component;
