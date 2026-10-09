import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fph3g9b8f.css';
import '../../css/g/g4fgyobiq.css';
import '../../css/q/q5x211bex.css';
import '../../css/i/ikv4dbcut.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fph3g9b8f"/><path class="g4fgyobiq"/><path class="q5x211bex"/><path class="ikv4dbcut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sliders-20-bold"} {...others} />);
}

export default Component;
