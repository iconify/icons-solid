import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p7pd29nnr.css';
import '../../css/v/vz92yjb_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p7pd29nnr"/><path class="vz92yjb_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:mountain-snow"} {...others} />);
}

export default Component;
