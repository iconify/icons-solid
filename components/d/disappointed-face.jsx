import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf3e5ykvo.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wplkh7x2z.css';
import '../../css/z/zsll00blu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kf3e5ykvo"/><g class="brzn_0bpr"><circle class="wplkh7x2z"/><path class="zsll00blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:disappointed-face"} {...others} />);
}

export default Component;
