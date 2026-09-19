import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxppqcwvg.css';
import '../../css/q/qttbk144e.css';
import '../../css/h/h_99_tbbf.css';
import '../../css/s/sp07t1b2b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxppqcwvg"/><path class="qttbk144e"/><path class="h_99_tbbf"/><path class="sp07t1b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-rose"} {...others} />);
}

export default Component;
