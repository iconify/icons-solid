import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yh2a82bhg.css';
import '../../css/d/dm44abbrd.css';
import '../../css/q/qgoe78bty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yh2a82bhg"/><path class="dm44abbrd"/><path class="qgoe78bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ranking2"} {...others} />);
}

export default Component;
