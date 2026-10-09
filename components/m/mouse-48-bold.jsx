import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cau1vhb9o.css';
import '../../css/l/lm7opbs2n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cau1vhb9o"/><path class="lm7opbs2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mouse-48-bold"} {...others} />);
}

export default Component;
