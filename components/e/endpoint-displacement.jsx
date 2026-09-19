import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtua1fe-t.css';
import '../../css/n/nm9oxpbmn.css';
import '../../css/u/uqx1j2nlc.css';
import '../../css/p/psoxpq-5k.css';
import '../../css/h/h1y8-7hhj.css';
import '../../css/m/mnvultbne.css';
import '../../css/i/i6gijh-ey.css';
import '../../css/w/w7rjlw43r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gtua1fe-t"/><path class="nm9oxpbmn"/><path class="uqx1j2nlc"/><path class="psoxpq-5k"/><path class="h1y8-7hhj"/><path class="mnvultbne"/><path class="i6gijh-ey"/><path class="w7rjlw43r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:endpoint-displacement"} {...others} />);
}

export default Component;
