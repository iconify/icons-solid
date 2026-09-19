import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fm7-f_bbx.css';
import '../../css/z/zfqdcndez.css';
import '../../css/u/uuh2pnbrr.css';
import '../../css/n/nxd9meued.css';
import '../../css/q/qqey8qzek.css';
import '../../css/a/aajekwbwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="fm7-f_bbx"/><path class="zfqdcndez"/><path clip-rule="evenodd" class="uuh2pnbrr"/><path clip-rule="evenodd" class="nxd9meued"/><path clip-rule="evenodd" class="qqey8qzek"/><path clip-rule="evenodd" class="aajekwbwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:webcam"} {...others} />);
}

export default Component;
