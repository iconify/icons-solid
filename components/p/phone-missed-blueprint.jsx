import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/ajz1x576z.css';
import '../../css/j/je2-1kbpm.css';
import '../../css/x/xupe0ib4r.css';
import '../../css/i/is_-82b8q.css';
import '../../css/u/u-ab0kbdf.css';
import '../../css/x/xsba9hbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ajz1x576z wm-deco"/><path class="je2-1kbpm wm-deco"/><path class="wm-deco xupe0ib4r"/><path class="is_-82b8q wm-k"/><path class="u-ab0kbdf wm-s"/><path class="wm-s xsba9hbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-missed-blueprint"} {...others} />);
}

export default Component;
