import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/m2miwmpjv.css';
import '../../css/a/ac-e7bk8s.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="m2miwmpjv"/><path class="ac-e7bk8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cylinder"} {...others} />);
}

export default Component;
