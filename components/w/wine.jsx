import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m2hbyxbal.css';
import '../../css/a/armsbbkol.css';
import '../../css/o/opi96xvus.css';
import '../../css/u/uxsptjbvt.css';
import '../../css/t/tgsx53bsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m2hbyxbal"/><path class="armsbbkol wm-shine"/><path class="opi96xvus wm-k"/><path class="uxsptjbvt wm-a"/><path class="tgsx53bsj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wine"} {...others} />);
}

export default Component;
