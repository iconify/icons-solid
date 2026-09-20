import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6x6wlb1v.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="o6x6wlb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:arrow-top-right"} {...others} />);
}

export default Component;
