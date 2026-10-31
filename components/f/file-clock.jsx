import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lnh62j9mh.css';
import '../../css/m/mk8p-nb8p.css';
import '../../css/s/seot-cb9c.css';
import '../../css/p/p0tyw5bjs.css';
import '../../css/j/j-j_5zxet.css';
import '../../css/x/x2s1c9iwu.css';
import '../../css/s/sqviquhdk.css';
import '../../css/s/serkeaces.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lnh62j9mh wm-shadow"/><path class="mk8p-nb8p wm-s"/><path class="seot-cb9c wm-shadow"/><path class="p0tyw5bjs"/><path class="j-j_5zxet"/><path class="wm-s x2s1c9iwu"/><path class="sqviquhdk wm-s"/><path class="serkeaces wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:file-clock"} {...others} />);
}

export default Component;
