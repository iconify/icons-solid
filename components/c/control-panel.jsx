import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qivazt3xq.css';
import '../../css/h/hwkz_mbiu.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="qivazt3xq"/><path class="hwkz_mbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:control-panel"} {...others} />);
}

export default Component;
