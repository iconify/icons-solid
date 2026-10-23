import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cqc2dpy0a.css';
import '../../css/m/m6dl7nbkg.css';
import '../../css/w/w03_94bgs.css';
import '../../css/y/y8raz3bfp.css';
import '../../css/q/qcgf0h-kr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="cqc2dpy0a"/><path class="m6dl7nbkg"/><path class="w03_94bgs"/><path class="y8raz3bfp"/><path class="qcgf0h-kr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:thermometer"} {...others} />);
}

export default Component;
