import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r251e8b6n.css';
import '../../css/b/bzinr4bnh.css';
import '../../css/r/r1yzrf19m.css';
import '../../css/p/p8x8sgbum.css';
import '../../css/v/v7v_u0jql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="r251e8b6n wm-deco"/><path class="bzinr4bnh wm-deco"/><path class="r1yzrf19m wm-deco"/><path class="p8x8sgbum wm-k"/><path class="v7v_u0jql wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dog-blueprint"} {...others} />);
}

export default Component;
