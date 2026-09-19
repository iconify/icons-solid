import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ylpfrg0xm.css';
import '../../css/y/ydaaso3qd.css';
import '../../css/h/h22iprnmn.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="ylpfrg0xm"/><path class="ydaaso3qd"/><path class="h22iprnmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ci-1x1"} {...others} />);
}

export default Component;
