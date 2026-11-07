import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpzqbccsw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fwjwj61be.css';
import '../../css/h/h7scsrb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vpzqbccsw"/><g class="xtpeb-edw"><path class="fwjwj61be"/><path class="h7scsrb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
