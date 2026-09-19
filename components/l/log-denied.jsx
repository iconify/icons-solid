import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h8_czlbzy.css';
import '../../css/a/a_opsx2am.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h8_czlbzy"/><path class="a_opsx2am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:log-denied"} {...others} />);
}

export default Component;
