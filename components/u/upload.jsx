import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h02zmjtek.css';
import '../../css/q/qy0rpabfw.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="h02zmjtek"/><path class="qy0rpabfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:upload"} {...others} />);
}

export default Component;
