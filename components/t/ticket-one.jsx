import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kd2_hibxd.css';
import '../../css/z/zzqn8_sjh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="kd2_hibxd"/><path class="zzqn8_sjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:ticket-one"} {...others} />);
}

export default Component;
