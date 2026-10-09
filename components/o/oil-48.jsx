import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4lu07s0y.css';
import '../../css/l/l_8wx2fdq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r4lu07s0y"/><path class="l_8wx2fdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-48"} {...others} />);
}

export default Component;
