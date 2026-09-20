import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h940q7b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h940q7b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-specialty-knee-1-bold"} {...others} />);
}

export default Component;
