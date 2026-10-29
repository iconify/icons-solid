import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f7cvbybdf.css';
import '../../css/m/mciqarqez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f7cvbybdf"/><path class="mciqarqez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:play-sketch"} {...others} />);
}

export default Component;
