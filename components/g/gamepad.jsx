import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6_hgo1gh.css';
import '../../css/d/d-q9u0ozl.css';
import '../../css/w/wom5eac6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s6_hgo1gh"/><path class="d-q9u0ozl"/><path class="wom5eac6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gamepad"} {...others} />);
}

export default Component;
