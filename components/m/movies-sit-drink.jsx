import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/roi7ocp-x.css';
import '../../css/q/qymrhgs1b.css';
import '../../css/c/cikx8uaac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="roi7ocp-x"/><path class="qymrhgs1b"/><path class="cikx8uaac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:movies-sit-drink"} {...others} />);
}

export default Component;
