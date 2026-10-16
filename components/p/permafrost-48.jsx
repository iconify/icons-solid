import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmv_a2yqj.css';
import '../../css/i/ikqbsqkky.css';
import '../../css/k/kwwjy76oi.css';
import '../../css/e/e0kgqbcyl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lmv_a2yqj"/><path class="ikqbsqkky"/><path class="kwwjy76oi"/><path class="e0kgqbcyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:permafrost-48"} {...others} />);
}

export default Component;
