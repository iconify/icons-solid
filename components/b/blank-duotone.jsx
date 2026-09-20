import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlif8lbav.css';
import '../../css/f/f72_8xqoe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dlif8lbav"/><path class="f72_8xqoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:blank-duotone"} {...others} />);
}

export default Component;
