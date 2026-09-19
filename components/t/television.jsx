import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kl4zunb3c.css';
import '../../css/a/araz-lb3i.css';
import '../../css/q/q2vfgq-lo.css';
import '../../css/v/vgv8dh9lu.css';
import '../../css/z/ztvvpvise.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kl4zunb3c"/><path class="araz-lb3i"/><circle class="q2vfgq-lo"/><path class="vgv8dh9lu"/><path class="ztvvpvise"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:television"} {...others} />);
}

export default Component;
