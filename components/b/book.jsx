import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvzdmtb_q.css';
import '../../css/q/q1gzscbeh.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="wvzdmtb_q"/><path class="q1gzscbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:book"} {...others} />);
}

export default Component;
