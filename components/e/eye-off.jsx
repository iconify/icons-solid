import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h11-d8b9r.css';
import '../../css/h/h00qcdc0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h11-d8b9r"/><path class="h00qcdc0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:eye-off"} {...others} />);
}

export default Component;
