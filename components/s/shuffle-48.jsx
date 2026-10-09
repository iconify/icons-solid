import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhf6nqbcm.css';
import '../../css/k/khmlq3g6t.css';
import '../../css/b/b63ugobgm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lhf6nqbcm"/><path class="khmlq3g6t"/><path class="b63ugobgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shuffle-48"} {...others} />);
}

export default Component;
