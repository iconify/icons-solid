import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ueef18k6a.css';
import '../../css/m/m4l-9ybuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ueef18k6a"/><circle class="m4l-9ybuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:slash"} {...others} />);
}

export default Component;
