import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdjudybvz.css';
import '../../css/v/vzvirib9h.css';
import '../../css/d/d4kkk8bor.css';
import '../../css/k/kbafubqhu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kdjudybvz"/><path class="vzvirib9h"/><path class="d4kkk8bor"/><path class="kbafubqhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airborne-wind-48-bold"} {...others} />);
}

export default Component;
