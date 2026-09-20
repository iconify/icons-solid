import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/i6d3wibqa.css';
import '../../css/u/u8kz-kcyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="i6d3wibqa"/><path class="u8kz-kcyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-notif"} {...others} />);
}

export default Component;
