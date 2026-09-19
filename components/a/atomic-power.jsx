import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zueb8fb3m.css';
import '../../css/y/y69zjmb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zueb8fb3m"/><path class="y69zjmb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:atomic-power"} {...others} />);
}

export default Component;
