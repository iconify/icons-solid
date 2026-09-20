import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkyqy-baq.css';
import '../../css/t/t4ulnobzr.css';
import '../../css/y/yq1nwtbah.css';
import '../../css/h/huqwiacxb.css';
import '../../css/k/kx-_22blo.css';
import '../../css/i/ien2smbtx.css';
import '../../css/k/km0_-5boi.css';
import '../../css/d/d6p324bmn.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="bkyqy-baq"/><circle class="t4ulnobzr"/><path class="yq1nwtbah"/><path class="huqwiacxb"/><path class="kx-_22blo"/><path class="ien2smbtx"/><path class="km0_-5boi"/><path class="d6p324bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:virus-slash"} {...others} />);
}

export default Component;
