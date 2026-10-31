import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozh7-gzxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozh7-gzxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:component-instance-bulk-round"} {...others} />);
}

export default Component;
