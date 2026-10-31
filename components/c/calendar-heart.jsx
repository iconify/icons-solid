import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kq24j1p1x.css';
import '../../css/o/orwntkbca.css';
import '../../css/f/f9_3i8b8l.css';
import '../../css/g/ghfhivbgc.css';
import '../../css/w/w2ogq-m2h.css';
import '../../css/d/d_jz5xbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="kq24j1p1x wm-shadow"/><path class="orwntkbca wm-shadow"/><path class="f9_3i8b8l"/><path class="ghfhivbgc"/><path class="w2ogq-m2h"/><path class="d_jz5xbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:calendar-heart"} {...others} />);
}

export default Component;
