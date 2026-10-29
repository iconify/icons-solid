import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oa9a2oboa.css';
import '../../css/z/zpu53zwhs.css';
import '../../css/l/l9lv5_bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oa9a2oboa"/><path class="wm-a zpu53zwhs"/><path class="l9lv5_bcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-face-duo"} {...others} />);
}

export default Component;
