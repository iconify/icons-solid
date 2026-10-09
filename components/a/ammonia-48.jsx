import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-o60sb2m.css';
import '../../css/l/lr2ntzbjp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e-o60sb2m"/><path class="lr2ntzbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-48"} {...others} />);
}

export default Component;
