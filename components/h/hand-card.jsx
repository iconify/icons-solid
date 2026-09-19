import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nx-_lhbej.css';
import '../../css/v/vwe9oyznd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nx-_lhbej"/><path class="vwe9oyznd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hand-card"} {...others} />);
}

export default Component;
