import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_k_gkv_i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t_k_gkv_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:isabelle"} {...others} />);
}

export default Component;
