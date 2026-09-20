import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g-0d1ab6q.css';
import '../../css/k/k9jvds0-b.css';
import '../../css/r/ritp03bwp.css';
import '../../css/m/mbug_m55z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g-0d1ab6q"/><path class="k9jvds0-b"/><path class="ritp03bwp"/><path class="mbug_m55z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipping-logistic-free-shipping-delivery-truck"} {...others} />);
}

export default Component;
