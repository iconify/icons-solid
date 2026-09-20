import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg620pbav.css';
import '../../css/b/brhnrtb_n.css';
import '../../css/n/n06a_8beg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yg620pbav"/><path class="brhnrtb_n"/><path clip-rule="evenodd" class="n06a_8beg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sliders"} {...others} />);
}

export default Component;
