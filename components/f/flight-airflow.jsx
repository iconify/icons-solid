import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qa3-8i7to.css';
import '../../css/c/cs8cat2hk.css';
import '../../css/z/zfy9cb6vk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="qa3-8i7to"/><path class="cs8cat2hk"/><path class="zfy9cb6vk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:flight-airflow"} {...others} />);
}

export default Component;
