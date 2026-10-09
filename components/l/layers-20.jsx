import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbzawxtfe.css';
import '../../css/f/fhe_vac-v.css';
import '../../css/g/gifn9ew9v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lbzawxtfe"/><path class="fhe_vac-v"/><path class="gifn9ew9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:layers-20"} {...others} />);
}

export default Component;
