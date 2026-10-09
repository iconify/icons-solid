import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7zm0u_6f.css';
import '../../css/j/jiqi-hb6a.css';
import '../../css/x/xf-_f2-0r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m7zm0u_6f"/><path class="jiqi-hb6a"/><path class="xf-_f2-0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cocktail-20-bold"} {...others} />);
}

export default Component;
