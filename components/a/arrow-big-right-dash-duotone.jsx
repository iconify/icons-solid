import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8yumab0d.css';
import '../../css/k/k9cfksblu.css';
import '../../css/i/ig4fi3b7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k8yumab0d"/><path class="k9cfksblu"/><path class="ig4fi3b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:arrow-big-right-dash-duotone"} {...others} />);
}

export default Component;
