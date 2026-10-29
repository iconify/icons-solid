import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fl1qehb7a.css';
import '../../css/x/xsytezbqj.css';
import '../../css/y/yejwi6q9p.css';
import '../../css/o/oiou_ab0f.css';
import '../../css/u/ug31pzk5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fl1qehb7a"/><path class="wm-a xsytezbqj"/><path class="yejwi6q9p"/><path class="oiou_ab0f wm-a"/><path class="ug31pzk5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:repeat-1"} {...others} />);
}

export default Component;
