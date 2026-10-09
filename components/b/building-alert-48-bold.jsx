import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgo-bn5bm.css';
import '../../css/d/dsjehubcj.css';
import '../../css/u/u9s9akrzi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pgo-bn5bm"/><path class="dsjehubcj"/><path class="u9s9akrzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-alert-48-bold"} {...others} />);
}

export default Component;
