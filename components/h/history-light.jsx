import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h5agcw4yc.css';
import '../../css/v/v26v1bc-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h5agcw4yc"/><path class="v26v1bc-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:history-light"} {...others} />);
}

export default Component;
