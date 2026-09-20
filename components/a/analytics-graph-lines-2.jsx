import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oy64xf24x.css';
import '../../css/q/q1msbjubp.css';
import '../../css/i/i0ygm8b-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oy64xf24x"/><path class="q1msbjubp"/><path class="i0ygm8b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-graph-lines-2"} {...others} />);
}

export default Component;
