import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kbelt3bth.css';
import '../../css/w/wyatkprlj.css';
import '../../css/h/hwf5aybef.css';
import '../../css/u/umz1zqvzv.css';
import '../../css/c/cb591acvg.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kbelt3bth"/><path class="wyatkprlj"/><path class="hwf5aybef wm-shine"/><path class="umz1zqvzv wm-k"/><path class="cb591acvg wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-robot"} {...others} />);
}

export default Component;
