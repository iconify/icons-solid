import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/it0ioyssf.css';
import '../../css/b/b99lqrc2c.css';
import '../../css/w/wc6k80aqu.css';
import '../../css/h/h6vy_bb1l.css';
import '../../css/a/aj5bowzyc.css';
import '../../css/c/cx-hbfbqi.css';
import '../../css/w/wyj7vommk.css';
import '../../css/e/exzvjw7bu.css';
import '../../css/y/yz-6rmbas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="it0ioyssf wm-shadow"/><path class="b99lqrc2c wm-shadow"/><path class="wc6k80aqu"/><path class="h6vy_bb1l"/><path class="aj5bowzyc"/><path class="cx-hbfbqi"/><path class="wm-shine wyj7vommk"/><path class="exzvjw7bu wm-shine"/><path class="yz-6rmbas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:code-xml"} {...others} />);
}

export default Component;
