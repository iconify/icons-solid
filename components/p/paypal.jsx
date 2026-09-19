import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wt3lnp3_y.css';
import '../../css/g/gnlke_a9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wt3lnp3_y"/><path class="gnlke_a9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:paypal"} {...others} />);
}

export default Component;
