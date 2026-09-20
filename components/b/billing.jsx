import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upkyg_b6q.css';
import '../../css/f/fz7rrmbdj.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="upkyg_b6q"/><path class="fz7rrmbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:billing"} {...others} />);
}

export default Component;
