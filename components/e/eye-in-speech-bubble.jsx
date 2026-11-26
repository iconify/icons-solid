import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlzscws7b.css';
import '../../css/q/qgh2yv_po.css';
import '../../css/f/fn6kh-bsj.css';
import '../../css/a/akjz_4bvf.css';

const viewBox = {"width":512,"height":512};
const content = `<g transform="matrix(2.4 0 0 2.4 14.897 14.897)"><path class="wlzscws7b"/><path class="qgh2yv_po"/><circle class="fn6kh-bsj"/><circle class="akjz_4bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:eye-in-speech-bubble"} {...others} />);
}

export default Component;
