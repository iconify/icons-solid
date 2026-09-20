import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg6pjbb_x.css';
import '../../css/l/l70ob6bam.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="pg6pjbb_x"/><path class="l70ob6bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cloud-sync"} {...others} />);
}

export default Component;
