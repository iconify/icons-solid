import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xdj55ubkl.css';
import '../../css/k/k1tekhkix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xdj55ubkl"/><path class="k1tekhkix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:volume-high"} {...others} />);
}

export default Component;
