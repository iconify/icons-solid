import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/e/e3rnhgbgh.css';
import '../../css/x/xtl81vb2a.css';
import '../../css/f/frwvw2bpc.css';
import '../../css/k/kp1_yialh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="e3rnhgbgh"/><path class="xtl81vb2a"/><path class="frwvw2bpc"/><path class="kp1_yialh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:telescope"} {...others} />);
}

export default Component;
