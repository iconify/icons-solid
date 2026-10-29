import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zmot90b0d.css';
import '../../css/z/zsrud4b_u.css';
import '../../css/r/rdnu6ociv.css';
import '../../css/a/adv3oacce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k zmot90b0d"/><path class="zsrud4b_u"/><path class="rdnu6ociv"/><path class="adv3oacce wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mouse-pointer-click"} {...others} />);
}

export default Component;
