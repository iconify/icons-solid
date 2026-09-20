import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hofylubij.css';
import '../../css/x/xq1vpwbey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hofylubij"/><path clip-rule="evenodd" class="xq1vpwbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:keyboard"} {...others} />);
}

export default Component;
