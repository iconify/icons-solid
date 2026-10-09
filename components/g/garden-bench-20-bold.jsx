import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcgtjcb0f.css';
import '../../css/f/fmoi5vldd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kcgtjcb0f"/><path class="fmoi5vldd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garden-bench-20-bold"} {...others} />);
}

export default Component;
