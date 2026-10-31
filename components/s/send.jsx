import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xjrg2eb1f.css';
import '../../css/u/u13si6bzb.css';
import '../../css/x/xto3qs4qk.css';
import '../../css/v/v77h40y6h.css';
import '../../css/v/v-prjybtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xjrg2eb1f"/><path class="u13si6bzb wm-shadow"/><path class="xto3qs4qk"/><path class="v77h40y6h"/><path class="v-prjybtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:send"} {...others} />);
}

export default Component;
