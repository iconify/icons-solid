import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwg6nmvzy.css';
import '../../css/k/k1o0uibpr.css';
import '../../css/a/a2v302bpg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wwg6nmvzy"/><path class="k1o0uibpr"/><path class="a2v302bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-bolt-20"} {...others} />);
}

export default Component;
