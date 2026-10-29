import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/atlcdwcje.css';
import '../../css/m/mhdr543mh.css';
import '../../css/l/liv-aobwc.css';
import '../../css/r/r6gbs3bix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="atlcdwcje wm-deco"/><path class="mhdr543mh wm-deco"/><path class="liv-aobwc"/><path class="r6gbs3bix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-justify-blueprint"} {...others} />);
}

export default Component;
