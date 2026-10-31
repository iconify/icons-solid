import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h1g5k9dga.css';
import '../../css/t/tjtq2bbog.css';
import '../../css/q/qgx8d9bmx.css';
import '../../css/g/gsp786r5p.css';
import '../../css/i/isvnfccbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h1g5k9dga wm-shadow"/><path class="tjtq2bbog wm-shadow"/><path class="qgx8d9bmx"/><path class="gsp786r5p"/><path class="isvnfccbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:spider"} {...others} />);
}

export default Component;
