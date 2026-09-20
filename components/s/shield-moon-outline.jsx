import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asi4edbqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="asi4edbqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shield-moon-outline"} {...others} />);
}

export default Component;
