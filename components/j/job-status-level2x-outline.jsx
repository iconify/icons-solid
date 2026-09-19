import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv66cgbfs.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qv66cgbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:job-status-level2x-outline"} {...others} />);
}

export default Component;
