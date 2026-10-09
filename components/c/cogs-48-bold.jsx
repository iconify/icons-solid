import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzr7ecx0m.css';
import '../../css/l/lizp2ibyj.css';
import '../../css/v/vph4g2brq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mzr7ecx0m"/><path class="lizp2ibyj"/><path class="vph4g2brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cogs-48-bold"} {...others} />);
}

export default Component;
