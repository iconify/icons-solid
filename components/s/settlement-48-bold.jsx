import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9rw-n5ub.css';
import '../../css/n/nyre3sbly.css';
import '../../css/k/kzevrep2n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a9rw-n5ub"/><path class="nyre3sbly"/><path class="kzevrep2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:settlement-48-bold"} {...others} />);
}

export default Component;
