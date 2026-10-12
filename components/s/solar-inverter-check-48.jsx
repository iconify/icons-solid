import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et_wnkuox.css';
import '../../css/w/wqhrjbcye.css';
import '../../css/q/qdytrdbev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="et_wnkuox"/><path class="wqhrjbcye"/><path class="qdytrdbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-inverter-check-48"} {...others} />);
}

export default Component;
