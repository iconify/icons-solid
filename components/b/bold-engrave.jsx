import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nbbbucc-k.css';
import '../../css/j/jpijyacjj.css';
import '../../css/r/r1-lpnfzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nbbbucc-k"/><path class="jpijyacjj wm-shadow"/><path class="r1-lpnfzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bold-engrave"} {...others} />);
}

export default Component;
