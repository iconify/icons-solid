import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mym4apf8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mym4apf8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-triangle-linear"} {...others} />);
}

export default Component;
