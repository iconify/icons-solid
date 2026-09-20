import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/t3_m6sbmj.css';
import '../../css/p/pkxgxgb2j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="t3_m6sbmj"/><path class="pkxgxgb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pool-ladder"} {...others} />);
}

export default Component;
