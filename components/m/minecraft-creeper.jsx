import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6xk0f5fc.css';
import '../../css/m/mi_ecrt5s.css';
import '../../css/b/bst7l4f5b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f6xk0f5fc"/><path class="mi_ecrt5s"/><path class="bst7l4f5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minecraft-creeper"} {...others} />);
}

export default Component;
