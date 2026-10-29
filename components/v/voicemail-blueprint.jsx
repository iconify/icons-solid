import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gpuvf8bwr.css';
import '../../css/o/o-tsjlamj.css';
import '../../css/m/m9avzl1wk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gpuvf8bwr wm-deco"/><path class="o-tsjlamj wm-deco"/><path class="m9avzl1wk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:voicemail-blueprint"} {...others} />);
}

export default Component;
