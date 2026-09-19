import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6bi2lk6s.css';
import '../../css/x/xloc_vq6r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t6bi2lk6s"/><path class="xloc_vq6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:fastfood"} {...others} />);
}

export default Component;
