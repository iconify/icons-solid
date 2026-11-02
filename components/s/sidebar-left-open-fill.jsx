import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx8fw-bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sx8fw-bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sidebar-left-open-fill"} {...others} />);
}

export default Component;
