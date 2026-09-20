import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lqcocqe4n.css';
import '../../css/b/b_juddsas.css';
import '../../css/k/kuyyylbud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lqcocqe4n"/><path class="b_juddsas"/><path class="kuyyylbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-touch"} {...others} />);
}

export default Component;
