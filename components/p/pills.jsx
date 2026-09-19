import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es7ggpb0t.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="es7ggpb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:pills"} {...others} />);
}

export default Component;
