import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0bqss54y.css';
import '../../css/k/khng8rbjh.css';
import '../../css/q/qjxwpdimh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k0bqss54y"/><path class="khng8rbjh"/><path class="qjxwpdimh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dessert-duotone"} {...others} />);
}

export default Component;
