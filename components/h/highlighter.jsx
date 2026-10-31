import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/es3m-tj7e.css';
import '../../css/v/vpiwnzbbz.css';
import '../../css/s/sv0an_bax.css';
import '../../css/m/m791eijcl.css';
import '../../css/f/fx4dcjfmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="es3m-tj7e wm-shadow"/><path class="vpiwnzbbz wm-shadow"/><path class="sv0an_bax"/><path class="m791eijcl"/><path class="fx4dcjfmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:highlighter"} {...others} />);
}

export default Component;
