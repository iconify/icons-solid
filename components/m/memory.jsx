import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/japn8_19f.css';
import '../../css/q/qce42tb_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="japn8_19f"/><path class="qce42tb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:memory"} {...others} />);
}

export default Component;
