import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poefxtbls.css';
import '../../css/a/alj1n3b0b.css';
import '../../css/z/zvh232b5d.css';
import '../../css/s/s9k_2uvrd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="poefxtbls"/><path class="alj1n3b0b"/><path class="zvh232b5d"/><path class="s9k_2uvrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:port-20-bold"} {...others} />);
}

export default Component;
