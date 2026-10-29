import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l2mflcm2v.css';
import '../../css/g/g2xclxbug.css';
import '../../css/j/jkj5y8biz.css';
import '../../css/m/my7poevrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="l2mflcm2v wm-deco"/><path class="g2xclxbug wm-deco"/><path class="jkj5y8biz wm-k"/><path class="my7poevrw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:film-blueprint"} {...others} />);
}

export default Component;
