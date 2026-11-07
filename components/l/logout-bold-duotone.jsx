import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnqp7eb9p.css';
import '../../css/t/tsxl3yofp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnqp7eb9p"/><path clip-rule="evenodd" class="tsxl3yofp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-bold-duotone"} {...others} />);
}

export default Component;
