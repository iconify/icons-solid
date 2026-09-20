import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wui9oebxu.css';
import '../../css/c/ck31hzb3q.css';
import '../../css/b/bpnjzj0ou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wui9oebxu"/><path class="ck31hzb3q"/><path class="bpnjzj0ou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earth-pin-2"} {...others} />);
}

export default Component;
