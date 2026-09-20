import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zicomcbso.css';
import '../../css/u/u1wm0nb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zicomcbso"/><path class="u1wm0nb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ticket-expired"} {...others} />);
}

export default Component;
