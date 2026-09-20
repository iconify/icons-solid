import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n2pw1mffs.css';
import '../../css/f/f7azv0kip.css';
import '../../css/g/gyeonr9rw.css';
import '../../css/c/cahl0fbfp.css';
import '../../css/e/ex9vehb3q.css';
import '../../css/y/yre2wm67g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n2pw1mffs"/><path class="f7azv0kip"/><path class="gyeonr9rw"/><path class="cahl0fbfp"/><path class="ex9vehb3q"/><path class="yre2wm67g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-perspective-broken"} {...others} />);
}

export default Component;
