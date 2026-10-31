import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/ndjbzvb7j.css';
import '../../css/f/fjughibva.css';
import '../../css/s/sc2tvobjv.css';
import '../../css/p/pi5wsnb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ndjbzvb7j wm-shadow"/><path class="fjughibva wm-shadow"/><path class="sc2tvobjv"/><path class="pi5wsnb6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rotate-cw"} {...others} />);
}

export default Component;
