import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb7h-ubmy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pb7h-ubmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-funnel-48"} {...others} />);
}

export default Component;
