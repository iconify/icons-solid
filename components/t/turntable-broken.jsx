import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x8w5itp5u.css';
import '../../css/z/zhaqmra8c.css';
import '../../css/q/q91v76bet.css';
import '../../css/g/gdy9g0mwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x8w5itp5u"/><path class="zhaqmra8c"/><path class="q91v76bet"/><path class="gdy9g0mwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-broken"} {...others} />);
}

export default Component;
