import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b2ps5cbvw.css';
import '../../css/q/q0k2hfgit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="b2ps5cbvw"/><path class="q0k2hfgit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:subtitles-sharp-two-tone"} {...others} />);
}

export default Component;
