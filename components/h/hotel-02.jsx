import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/plr4880_d.css';
import '../../css/y/ybtd3p2bo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="plr4880_d"/><path class="ybtd3p2bo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hotel-02"} {...others} />);
}

export default Component;
