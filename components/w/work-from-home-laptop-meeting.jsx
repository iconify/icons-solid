import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/m/m9ko8cqoj.css';
import '../../css/n/n0tniobhp.css';
import '../../css/m/mrvttfbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="m9ko8cqoj"/><path class="n0tniobhp"/><path class="mrvttfbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:work-from-home-laptop-meeting"} {...others} />);
}

export default Component;
