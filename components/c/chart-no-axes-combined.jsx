import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npsi0gptz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npsi0gptz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-no-axes-combined"} {...others} />);
}

export default Component;
