import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5b74t5pw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5b74t5pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-sidebar-right-collapse-filled"} {...others} />);
}

export default Component;
