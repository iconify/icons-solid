import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fj1bz4bph.css';
import '../../css/g/g78h_ubkd.css';
import '../../css/j/jh_igqb8n.css';
import '../../css/f/f_gq_5bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fj1bz4bph wm-shadow"/><path class="g78h_ubkd wm-shadow"/><path class="jh_igqb8n"/><path class="f_gq_5bhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:coffee"} {...others} />);
}

export default Component;
