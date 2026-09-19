import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/do9djbcui.css';
import '../../css/i/il9i7uoxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="do9djbcui"/><path class="il9i7uoxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corn"} {...others} />);
}

export default Component;
