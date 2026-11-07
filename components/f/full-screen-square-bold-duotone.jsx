import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/z/z__w_6-jn.css';
import '../../css/w/wji_d3v3x.css';
import '../../css/k/k7cui-bhf.css';
import '../../css/c/c2mpd8rak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="z__w_6-jn"/><path class="wji_d3v3x"/><path class="k7cui-bhf"/><path class="c2mpd8rak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-square-bold-duotone"} {...others} />);
}

export default Component;
