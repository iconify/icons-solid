import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rvne7zbfe.css';
import '../../css/x/x-pqqv81t.css';
import '../../css/j/j3sudr36g.css';
import '../../css/m/mmi-77tzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rvne7zbfe"/><path class="wm-shine x-pqqv81t"/><path class="j3sudr36g"/><path class="mmi-77tzp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-branch"} {...others} />);
}

export default Component;
