import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-zk1w6vl.css';
import '../../css/j/jg6n16uty.css';
import '../../css/y/y5s1tcbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f-zk1w6vl"/><path class="jg6n16uty"/><path class="y5s1tcbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-time"} {...others} />);
}

export default Component;
