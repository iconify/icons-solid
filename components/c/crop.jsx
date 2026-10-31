import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nciqnqb3q.css';
import '../../css/m/mtaq71okw.css';
import '../../css/r/r_45fibgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nciqnqb3q"/><path class="mtaq71okw wm-shine"/><path class="r_45fibgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:crop"} {...others} />);
}

export default Component;
