import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv05c1bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv05c1bvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-dashboard-filled"} {...others} />);
}

export default Component;
