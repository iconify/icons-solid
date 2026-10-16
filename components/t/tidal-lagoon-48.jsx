import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv4kqfbhb.css';
import '../../css/k/kqk5arb5g.css';
import '../../css/l/lpcx7nb6a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zv4kqfbhb"/><path class="kqk5arb5g"/><path class="lpcx7nb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-lagoon-48"} {...others} />);
}

export default Component;
