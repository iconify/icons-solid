import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7fb6nbqg.css';
import '../../css/x/xn59nof8q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7fb6nbqg"/><path class="xn59nof8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fast-forward-48"} {...others} />);
}

export default Component;
