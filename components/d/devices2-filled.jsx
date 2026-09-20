import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtmswccww.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rjmt1lb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGRHCYbejF" class="mtmswccww"/></defs><g class="cuyn6tgcc"><path class="rjmt1lb2s"/><use href="#SVGRHCYbejF"/><use href="#SVGRHCYbejF"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:devices2-filled"} {...others} />);
}

export default Component;
