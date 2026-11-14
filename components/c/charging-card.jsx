import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ibd-53qeo.css';
import '../../css/x/xjm_pacui.css';
import '../../css/u/u3h2dubyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="ibd-53qeo"/><path class="xjm_pacui"/><path class="u3h2dubyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-card"} {...others} />);
}

export default Component;
