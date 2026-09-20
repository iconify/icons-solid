import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izeitkbtq.css';
import '../../css/s/sas1sybli.css';
import '../../css/f/f8qywgl5f.css';
import '../../css/r/rg-m8gm0q.css';
import '../../css/m/m3_yopbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="izeitkbtq"/><path class="sas1sybli"/><path class="f8qywgl5f"/><path class="rg-m8gm0q"/><path clip-rule="evenodd" class="m3_yopbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playback-speed-outline"} {...others} />);
}

export default Component;
