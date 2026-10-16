import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyvsf2efo.css';
import '../../css/l/l4sy4bcud.css';
import '../../css/k/kqv787lxj.css';
import '../../css/s/s7kfd329x.css';
import '../../css/g/gdn9sdxzs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jyvsf2efo"/><path class="l4sy4bcud"/><path class="kqv787lxj"/><path class="s7kfd329x"/><path class="gdn9sdxzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mc4-connector-48"} {...others} />);
}

export default Component;
