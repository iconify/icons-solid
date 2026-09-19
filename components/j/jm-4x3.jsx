import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m1xbfebow.css';
import '../../css/a/ahryracrv.css';
import '../../css/b/bzy6fnbvg.css';
import '../../css/g/gyuq1jbxc.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="m1xbfebow"/><path class="ahryracrv"/><path class="bzy6fnbvg"/><path class="gyuq1jbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:jm-4x3"} {...others} />);
}

export default Component;
