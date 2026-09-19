import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8n81hbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8n81hbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-dock-right"} {...others} />);
}

export default Component;
