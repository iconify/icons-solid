import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wf49do70h.css';
import '../../css/q/qt3q0d06l.css';
import '../../css/k/k149fq8mf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wf49do70h"/><path class="qt3q0d06l"/><path class="k149fq8mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:brightness"} {...others} />);
}

export default Component;
