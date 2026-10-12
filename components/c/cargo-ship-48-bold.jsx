import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmx-vlbrm.css';
import '../../css/j/jjyg4db0j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pmx-vlbrm"/><path class="jjyg4db0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-ship-48-bold"} {...others} />);
}

export default Component;
