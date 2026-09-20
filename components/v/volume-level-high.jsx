import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/km7q2ibkc.css';
import '../../css/l/l0anjnbch.css';
import '../../css/e/ejj_1pbhe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="km7q2ibkc"/><path class="l0anjnbch"/><path class="ejj_1pbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:volume-level-high"} {...others} />);
}

export default Component;
