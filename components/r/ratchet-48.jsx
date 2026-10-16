import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp-qlgb3c.css';
import '../../css/u/uw0hg1f1e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kp-qlgb3c"/><path class="uw0hg1f1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ratchet-48"} {...others} />);
}

export default Component;
