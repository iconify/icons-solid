import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szrr77bpl.css';
import '../../css/f/fuzibccho.css';
import '../../css/p/pyu5csvld.css';
import '../../css/v/vjo99rbgl.css';
import '../../css/c/c_7ruacdi.css';
import '../../css/d/d2w58q9zq.css';
import '../../css/m/m4r40-qwu.css';
import '../../css/v/vpiawvbbp.css';
import '../../css/s/sms84zbad.css';
import '../../css/k/kaoa5nbuq.css';
import '../../css/j/jy6ioupjh.css';
import '../../css/r/r1-kbcscj.css';
import '../../css/w/w0rny15mf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="szrr77bpl wm-shadow"/><path class="fuzibccho wm-k"/><path class="pyu5csvld wm-k"/><path class="vjo99rbgl wm-k"/><path class="c_7ruacdi wm-k"/><path class="d2w58q9zq wm-shine"/><path class="m4r40-qwu wm-k"/><path class="vpiawvbbp wm-a"/><path class="sms84zbad wm-a"/><path class="kaoa5nbuq wm-a"/><path class="jy6ioupjh wm-a"/><path class="r1-kbcscj wm-a"/><path class="w0rny15mf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:log-out"} {...others} />);
}

export default Component;
