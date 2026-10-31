import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yiok1kwyv.css';
import '../../css/q/qfwdz4bfz.css';
import '../../css/x/xw6o85sac.css';
import '../../css/x/xzny2lb0y.css';
import '../../css/w/wfrjbsdvk.css';
import '../../css/v/vu22uc04x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yiok1kwyv"/><path class="qfwdz4bfz"/><path class="xw6o85sac"/><path class="xzny2lb0y"/><path class="wfrjbsdvk"/><path class="vu22uc04x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:church"} {...others} />);
}

export default Component;
