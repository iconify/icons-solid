import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e-7mzjb9p.css';
import '../../css/u/u40kb3buv.css';
import '../../css/i/itw7vib_f.css';
import '../../css/l/la_zwccio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e-7mzjb9p wm-shadow"/><path class="u40kb3buv wm-shadow"/><path class="itw7vib_f"/><path class="la_zwccio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:more-vertical"} {...others} />);
}

export default Component;
