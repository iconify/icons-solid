import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z4d_mjlxu.css';
import '../../css/x/xqdu5evlh.css';
import '../../css/h/hfkigjbqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="z4d_mjlxu"/><path class="xqdu5evlh"/><path class="hfkigjbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-join-sharp-two-tone"} {...others} />);
}

export default Component;
