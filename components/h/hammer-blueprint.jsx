import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y85a9px8a.css';
import '../../css/h/hyg9sac6o.css';
import '../../css/z/zpiwv7bjq.css';
import '../../css/i/i7cyrmb3c.css';
import '../../css/d/d1up9g-eu.css';
import '../../css/e/egrt96b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y85a9px8a"/><path class="hyg9sac6o wm-deco"/><path class="wm-deco zpiwv7bjq"/><path class="i7cyrmb3c wm-k"/><path class="d1up9g-eu wm-a"/><path class="egrt96b8w wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hammer-blueprint"} {...others} />);
}

export default Component;
