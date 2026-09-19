import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqt_u6rht.css';
import '../../css/d/dtidujbir.css';
import '../../css/t/t5aa6zazt.css';
import '../../css/l/l3g7hkpgh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lqt_u6rht"/><path class="dtidujbir"/><path class="t5aa6zazt"/><path class="l3g7hkpgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:mx-claus"} {...others} />);
}

export default Component;
