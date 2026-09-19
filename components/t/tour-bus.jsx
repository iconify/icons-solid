import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eeufb36fr.css';
import '../../css/f/f2iqtbcqq.css';
import '../../css/h/ho0fzgikm.css';
import '../../css/t/ts5h3v02i.css';
import '../../css/u/u1shi0b0u.css';
import '../../css/n/n-fahbqcm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="eeufb36fr"/><path class="f2iqtbcqq"/><path class="ho0fzgikm"/><circle class="ts5h3v02i"/><circle class="u1shi0b0u"/><path class="n-fahbqcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tour-bus"} {...others} />);
}

export default Component;
