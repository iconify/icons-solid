import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhka-gl7n.css';
import '../../css/c/c5wmubbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhka-gl7n"/><path class="c5wmubbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:credit-cards"} {...others} />);
}

export default Component;
