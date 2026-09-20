import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p61-0ivql.css';
import '../../css/z/zq0gwsbsg.css';
import '../../css/v/vwfxsk2ax.css';
import '../../css/o/o4nfhsbox.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p61-0ivql"/><path class="zq0gwsbsg"/><path class="vwfxsk2ax"/><path class="o4nfhsbox"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-angola"} {...others} />);
}

export default Component;
