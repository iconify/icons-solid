import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqyhofsbw.css';
import '../../css/u/ui3ncabcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bqyhofsbw"/><path class="ui3ncabcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:home-check"} {...others} />);
}

export default Component;
