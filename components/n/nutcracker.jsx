import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jn26bpb3j.css';
import '../../css/w/w37nfjb3n.css';
import '../../css/a/a3y3j-mmg.css';
import '../../css/p/py0-z1bzj.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jn26bpb3j"/><path class="w37nfjb3n wm-shine"/><path class="a3y3j-mmg wm-k"/><path class="py0-z1bzj wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:nutcracker"} {...others} />);
}

export default Component;
