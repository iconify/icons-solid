import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6qizcvhk.css';
import '../../css/y/yk9ufrxqu.css';
import '../../css/y/ych83_bej.css';
import '../../css/n/n1mrteb8e.css';
import '../../css/a/a8cw4obis.css';
import '../../css/i/ixq1o8b5k.css';
import '../../css/w/wm3v2rb1w.css';

const viewBox = {"width":128,"height":128};
const content = `<circle class="k6qizcvhk"/><path class="yk9ufrxqu"/><path class="ych83_bej"/><path class="n1mrteb8e"/><path clip-rule="evenodd" class="a8cw4obis"/><ellipse class="ixq1o8b5k"/><path clip-rule="evenodd" class="wm3v2rb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:electron"} {...others} />);
}

export default Component;
