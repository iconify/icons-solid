import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/piudvvb6v.css';
import '../../css/r/rcxwt6bbg.css';
import '../../css/a/ajaqpvbas.css';
import '../../css/o/ou0fjm6nt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="piudvvb6v wm-shadow"/><path class="rcxwt6bbg wm-shadow"/><path class="ajaqpvbas"/><path class="ou0fjm6nt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:check"} {...others} />);
}

export default Component;
