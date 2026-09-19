import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixat7proj.css';
import '../../css/l/lyvxmduej.css';
import '../../css/m/m63f0bc6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ixat7proj"/><path clip-rule="evenodd" class="lyvxmduej"/><path class="m63f0bc6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:school-flag-alt-solid"} {...others} />);
}

export default Component;
