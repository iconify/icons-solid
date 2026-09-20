import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qg8owzi5f.css';
import '../../css/s/sjqyd1bri.css';
import '../../css/z/z6_008b8j.css';
import '../../css/v/vskemkbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="qg8owzi5f"/><rect class="sjqyd1bri"/><rect class="z6_008b8j"/><path class="vskemkbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:chart-bar-trend-up"} {...others} />);
}

export default Component;
