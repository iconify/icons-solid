import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/it6092zqr.css';
import '../../css/j/jj86gvbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="it6092zqr"/><path class="jj86gvbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:linkedin"} {...others} />);
}

export default Component;
