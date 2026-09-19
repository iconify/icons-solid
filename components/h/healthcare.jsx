import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsij3zb9w.css';
import '../../css/q/qyze_cc1g.css';
import '../../css/q/qs5g--bge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qsij3zb9w"/><path class="qyze_cc1g"/><path class="qs5g--bge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:healthcare"} {...others} />);
}

export default Component;
