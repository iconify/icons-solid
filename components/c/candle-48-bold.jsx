import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3bwoucvq.css';
import '../../css/t/tydgjvody.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q3bwoucvq"/><path class="tydgjvody"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:candle-48-bold"} {...others} />);
}

export default Component;
