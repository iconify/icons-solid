import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/k8g_49zqu.css';
import '../../css/x/xxd5vybut.css';
import '../../css/o/o86yh-b_x.css';
import '../../css/q/qcpaezwko.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="k8g_49zqu"/><path class="xxd5vybut"/><path class="o86yh-b_x"/><path class="qcpaezwko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:voice-off"} {...others} />);
}

export default Component;
