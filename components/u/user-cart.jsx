import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q1hfxcl4y.css';
import '../../css/r/raa148t7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q1hfxcl4y"/><path class="raa148t7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-cart"} {...others} />);
}

export default Component;
