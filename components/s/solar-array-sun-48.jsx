import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtqyvac2f.css';
import '../../css/n/n6kcq-_mh.css';
import '../../css/r/rkn8k_q9m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wtqyvac2f"/><path class="n6kcq-_mh"/><path class="rkn8k_q9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-array-sun-48"} {...others} />);
}

export default Component;
