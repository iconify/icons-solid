import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b5-4_mb1p.css';
import '../../css/b/b67pbnbav.css';
import '../../css/t/t86fb0sry.css';
import '../../css/i/is_-82b8q.css';
import '../../css/s/sprk3fbkq.css';
import '../../css/c/cghw12usi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="b5-4_mb1p wm-deco"/><path class="b67pbnbav wm-deco"/><path class="t86fb0sry wm-deco"/><path class="is_-82b8q wm-k"/><path class="sprk3fbkq wm-s"/><path class="cghw12usi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-call-blueprint"} {...others} />);
}

export default Component;
