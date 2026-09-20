import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ui3ncabcp.css';
import '../../css/q/qcqa6_brs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ui3ncabcp"/><path class="qcqa6_brs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:home"} {...others} />);
}

export default Component;
