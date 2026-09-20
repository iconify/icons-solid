import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir4jimgrs.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ir4jimgrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:school-bench"} {...others} />);
}

export default Component;
