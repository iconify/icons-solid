import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m54p036kf.css';
import '../../css/p/pj3hiybvu.css';
import '../../css/z/z2uuann7q.css';
import '../../css/g/grag_ibhm.css';
import '../../css/h/hgi_w8bde.css';
import '../../css/u/uhrb9xbeb.css';
import '../../css/y/ym8jlp-4c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m54p036kf"/><path class="pj3hiybvu"/><path class="z2uuann7q"/><path class="grag_ibhm"/><path class="hgi_w8bde"/><path class="uhrb9xbeb"/><path class="ym8jlp-4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:projector-three"} {...others} />);
}

export default Component;
