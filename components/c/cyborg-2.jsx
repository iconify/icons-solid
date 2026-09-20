import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qr8970bkz.css';
import '../../css/b/bfmhm2bwf.css';
import '../../css/l/l4f8obylt.css';
import '../../css/z/z-nyumbot.css';
import '../../css/j/jc0yt-b7h.css';
import '../../css/s/shx2a5bvs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qr8970bkz"/><path class="bfmhm2bwf"/><path class="l4f8obylt"/><path class="z-nyumbot"/><path class="jc0yt-b7h"/><path class="shx2a5bvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:cyborg-2"} {...others} />);
}

export default Component;
