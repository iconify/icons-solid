import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hcs_5rbvj.css';
import '../../css/w/ws-eb1b7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hcs_5rbvj"/><path class="ws-eb1b7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:panel-right-open"} {...others} />);
}

export default Component;
