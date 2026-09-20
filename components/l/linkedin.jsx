import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ko3eesmxm.css';
import '../../css/m/mk19szlwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ko3eesmxm"/><path class="mk19szlwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:linkedin"} {...others} />);
}

export default Component;
