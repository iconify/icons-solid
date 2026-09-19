import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vl1yu0n4m.css';
import '../../css/e/eph851bhm.css';
import '../../css/p/ptmeui_8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vl1yu0n4m"/><path class="eph851bhm"/><path class="ptmeui_8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:exclude"} {...others} />);
}

export default Component;
