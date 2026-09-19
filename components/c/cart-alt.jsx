import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/psxi2obbs.css';
import '../../css/u/untzp004m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="psxi2obbs"/><path class="untzp004m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cart-alt"} {...others} />);
}

export default Component;
