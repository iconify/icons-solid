import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e82l9ab8r.css';
import '../../css/k/k6p64wbai.css';
import '../../css/e/e_8ojetoq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e82l9ab8r"/><path class="k6p64wbai"/><path class="e_8ojetoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-check-20"} {...others} />);
}

export default Component;
