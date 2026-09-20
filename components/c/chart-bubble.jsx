import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rmifq8l7r.css';
import '../../css/b/bzj15qgva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rmifq8l7r"/><path class="bzj15qgva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chart-bubble"} {...others} />);
}

export default Component;
