import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o-pyckg-q.css';
import '../../css/f/f-3_x3hdg.css';
import '../../css/x/xpfvnec9d.css';
import '../../css/p/phawmubhy.css';
import '../../css/k/ko8hvgezf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o-pyckg-q"/><path class="f-3_x3hdg wm-shine"/><path class="wm-k xpfvnec9d"/><path class="phawmubhy wm-a"/><path class="ko8hvgezf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:paintbrush"} {...others} />);
}

export default Component;
