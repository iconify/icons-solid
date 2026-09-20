import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/inzh_j00b.css';
import '../../css/r/rlsuisb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="inzh_j00b"/><path class="rlsuisb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:ghost-sad"} {...others} />);
}

export default Component;
