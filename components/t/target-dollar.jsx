import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jeoamabzd.css';
import '../../css/s/sw3805bza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jeoamabzd"/><path class="sw3805bza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:target-dollar"} {...others} />);
}

export default Component;
