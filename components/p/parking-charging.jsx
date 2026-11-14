import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aqgpwq1vl.css';
import '../../css/f/fc9u2cb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aqgpwq1vl"/><path class="fc9u2cb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:parking-charging"} {...others} />);
}

export default Component;
