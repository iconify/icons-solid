import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy6caez-r.css';
import '../../css/e/es2bfhexf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wy6caez-r"/><path class="es2bfhexf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-bold-duotone"} {...others} />);
}

export default Component;
