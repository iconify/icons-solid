import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc5fb6b1r.css';
import '../../css/l/lix3kwe4f.css';
import '../../css/m/mmrx08g_l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pc5fb6b1r"/><path class="lix3kwe4f"/><path class="mmrx08g_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:road"} {...others} />);
}

export default Component;
