import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/t/t2ph_rb9y.css';
import '../../css/w/wb6949pqh.css';
import '../../css/m/m0dii6bxv.css';
import '../../css/q/q_2wsiq5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="t2ph_rb9y"/><path class="wb6949pqh"/><path class="m0dii6bxv"/><path class="q_2wsiq5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:screenshot"} {...others} />);
}

export default Component;
