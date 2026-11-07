import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf9o9n5rb.css';
import '../../css/k/kpz-x8bdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mf9o9n5rb"/><path clip-rule="evenodd" class="kpz-x8bdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-2-outline"} {...others} />);
}

export default Component;
