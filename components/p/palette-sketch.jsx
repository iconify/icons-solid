import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t78q7ssck.css';
import '../../css/a/aa1uukbal.css';
import '../../css/q/q0028p0hj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t78q7ssck"/><path class="aa1uukbal wm-k"/><path class="q0028p0hj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:palette-sketch"} {...others} />);
}

export default Component;
