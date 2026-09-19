import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvx5yfbep.css';
import '../../css/t/t91s7oy2f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hvx5yfbep"/><path class="t91s7oy2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:x-circle"} {...others} />);
}

export default Component;
