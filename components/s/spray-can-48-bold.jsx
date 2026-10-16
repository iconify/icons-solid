import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z46p_cexp.css';
import '../../css/k/k0mqbqbfv.css';
import '../../css/j/j2mvxkhzf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z46p_cexp"/><path class="k0mqbqbfv"/><path class="j2mvxkhzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spray-can-48-bold"} {...others} />);
}

export default Component;
