import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ez8wj_bdu.css';
import '../../css/l/l4l2e4iac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ez8wj_bdu"/><path class="l4l2e4iac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:undo"} {...others} />);
}

export default Component;
