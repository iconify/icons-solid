import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sozdzcb0a.css';
import '../../css/v/vvjesyy_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sozdzcb0a"/><path class="vvjesyy_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-column-big-filled"} {...others} />);
}

export default Component;
