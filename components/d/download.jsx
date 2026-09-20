import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h02zmjtek.css';
import '../../css/x/xk9upfb1q.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="h02zmjtek"/><path class="xk9upfb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:download"} {...others} />);
}

export default Component;
