import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bok_3xbsi.css';
import '../../css/r/r2e6-o--s.css';
import '../../css/b/buhykv-du.css';
import '../../css/z/z56dd-dvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bok_3xbsi wm-deco"/><path class="r2e6-o--s wm-deco"/><path class="buhykv-du wm-k"/><path class="wm-a z56dd-dvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:recycle-blueprint"} {...others} />);
}

export default Component;
