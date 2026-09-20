import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/r/rq7-j6prk.css';
import '../../css/u/uj5s799mj.css';
import '../../css/d/d4kdqeqoe.css';
import '../../css/g/giizlbxri.css';
import '../../css/b/bzxns-xuo.css';
import '../../css/u/uc9z8dbju.css';
import '../../css/t/tiojo6oxn.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="rq7-j6prk"/><path class="uj5s799mj"/><path class="d4kdqeqoe"/><path class="giizlbxri"/><path class="bzxns-xuo"/><path class="uc9z8dbju"/><path class="tiojo6oxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:linux-dark"} {...others} />);
}

export default Component;
