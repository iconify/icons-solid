import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9xwe29zq.css';
import '../../css/l/lyuckzd_a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b9xwe29zq"/><path class="lyuckzd_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-missed-48"} {...others} />);
}

export default Component;
