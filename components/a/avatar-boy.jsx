import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a_evw7bmy.css';
import '../../css/r/rd7pm5o_x.css';
import '../../css/z/zwa_xi7ft.css';
import '../../css/q/q1-0uzu6l.css';
import '../../css/g/g6l95nbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a_evw7bmy"/><path class="rd7pm5o_x"/><path class="zwa_xi7ft"/><path class="q1-0uzu6l"/><path class="g6l95nbpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-boy"} {...others} />);
}

export default Component;
