import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq7e6332b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mq7e6332b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-3-outline"} {...others} />);
}

export default Component;
