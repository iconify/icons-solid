import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rawx_4jhd.css';
import '../../css/t/tu0nkzb6s.css';
import '../../css/p/py3r1nbdl.css';
import '../../css/c/ct1pmlklf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rawx_4jhd wm-shadow"/><path class="tu0nkzb6s wm-shadow"/><path class="py3r1nbdl"/><path class="ct1pmlklf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:crosshair"} {...others} />);
}

export default Component;
