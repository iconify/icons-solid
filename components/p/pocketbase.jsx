import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnqhvtd5s.css';
import '../../css/k/k_ru2ibrc.css';
import '../../css/c/cusnesbxf.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path class="wnqhvtd5s"/><path class="k_ru2ibrc"/><path class="cusnesbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pocketbase"} {...others} />);
}

export default Component;
