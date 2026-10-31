import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dnujpcble.css';
import '../../css/k/ku4l5i70j.css';
import '../../css/r/rj4mzr9jm.css';
import '../../css/q/qyqc2fifu.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dnujpcble"/><path class="ku4l5i70j wm-shine"/><path class="rj4mzr9jm wm-k"/><path class="qyqc2fifu wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:house-wifi"} {...others} />);
}

export default Component;
