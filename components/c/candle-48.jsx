import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvshp_bta.css';
import '../../css/a/a1o2reb9p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jvshp_bta"/><path class="a1o2reb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:candle-48"} {...others} />);
}

export default Component;
