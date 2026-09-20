import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l_3w4tbsp.css';
import '../../css/g/g3amwib_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l_3w4tbsp"/><path class="g3amwib_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:shield-check"} {...others} />);
}

export default Component;
