import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gk06i0kzo.css';
import '../../css/w/whfi3pj-c.css';
import '../../css/m/m-ca285hp.css';
import '../../css/g/ga2uwqbuh.css';
import '../../css/p/pf2y4kbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gk06i0kzo wm-shadow"/><path class="whfi3pj-c"/><path class="m-ca285hp"/><path class="ga2uwqbuh"/><path class="pf2y4kbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:spy"} {...others} />);
}

export default Component;
