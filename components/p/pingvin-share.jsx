import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-pjcv3qg.css';
import '../../css/j/j0rhxcbpr.css';
import '../../css/f/fugoy7bnv.css';
import '../../css/o/owsyjwbki.css';
import '../../css/i/izpiasb8j.css';
import '../../css/y/yd0k9cc-d.css';
import '../../css/x/xc3gm8c5v.css';
import '../../css/v/v7awqf01d.css';

const viewBox = {"width":943.11,"height":911.62};
const content = `<ellipse class="q-pjcv3qg"/><ellipse class="j0rhxcbpr"/><path class="fugoy7bnv"/><path class="owsyjwbki"/><path class="izpiasb8j"/><ellipse class="yd0k9cc-d"/><ellipse class="xc3gm8c5v"/><path class="v7awqf01d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pingvin-share"} {...others} />);
}

export default Component;
