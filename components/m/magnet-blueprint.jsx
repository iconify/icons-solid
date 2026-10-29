import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r8szkwwde.css';
import '../../css/a/ag6daps-l.css';
import '../../css/b/bxjv56brc.css';
import '../../css/j/jura4nbok.css';
import '../../css/f/fcpcu9i2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="r8szkwwde wm-deco"/><path class="ag6daps-l wm-deco"/><path class="bxjv56brc wm-deco"/><path class="jura4nbok wm-k"/><path class="fcpcu9i2b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:magnet-blueprint"} {...others} />);
}

export default Component;
