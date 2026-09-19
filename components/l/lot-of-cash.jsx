import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pplftgbrn.css';
import '../../css/l/l0v595b1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pplftgbrn"/><path class="l0v595b1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:lot-of-cash"} {...others} />);
}

export default Component;
