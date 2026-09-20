import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6fbg22te.css';
import '../../css/x/x7j_6sbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q6fbg22te"/><path class="x7j_6sbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:wink-ghost"} {...others} />);
}

export default Component;
