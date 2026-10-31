import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yvlt6ab8p.css';
import '../../css/p/phlmb9d7b.css';
import '../../css/m/m2bmx8b3o.css';
import '../../css/i/iwj6vqhkl.css';
import '../../css/s/shi8gsyyp.css';
import '../../css/l/ltun-9g1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yvlt6ab8p"/><path class="phlmb9d7b"/><path class="m2bmx8b3o"/><path class="iwj6vqhkl"/><path class="shi8gsyyp"/><path class="ltun-9g1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:receipt-text"} {...others} />);
}

export default Component;
