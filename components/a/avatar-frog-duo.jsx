import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zqslojb_x.css';
import '../../css/b/bks1_nwhr.css';
import '../../css/j/j9br22bqu.css';
import '../../css/b/bfi0x3beo.css';
import '../../css/i/izujc22-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zqslojb_x"/><path class="bks1_nwhr"/><path class="j9br22bqu wm-a"/><path class="bfi0x3beo"/><path class="izujc22-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-frog-duo"} {...others} />);
}

export default Component;
