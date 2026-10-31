import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kb9disyks.css';
import '../../css/p/p4wj6ib0m.css';
import '../../css/o/oj3ir01bd.css';
import '../../css/n/nbbeicyqz.css';
import '../../css/u/urjb3e0xd.css';
import '../../css/t/thxy73aol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kb9disyks wm-shadow"/><path class="p4wj6ib0m"/><path class="oj3ir01bd"/><path class="nbbeicyqz"/><path class="urjb3e0xd"/><path class="thxy73aol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:kalash"} {...others} />);
}

export default Component;
