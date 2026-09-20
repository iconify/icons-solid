import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnl0_qbml.css';
import '../../css/r/rg-m8gm0q.css';
import '../../css/f/f8qywgl5f.css';
import '../../css/s/sas1sybli.css';
import '../../css/h/hlhl_ab6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bnl0_qbml"/><path class="rg-m8gm0q"/><path class="f8qywgl5f"/><path class="sas1sybli"/><path class="hlhl_ab6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playback-speed-bold"} {...others} />);
}

export default Component;
