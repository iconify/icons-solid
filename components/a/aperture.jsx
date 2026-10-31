import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x-bqvgfbt.css';
import '../../css/w/w267azo2u.css';
import '../../css/x/x19ysy4wk.css';
import '../../css/a/ahcxo1i_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x-bqvgfbt"/><path class="w267azo2u wm-shadow"/><path class="x19ysy4wk"/><path class="ahcxo1i_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:aperture"} {...others} />);
}

export default Component;
