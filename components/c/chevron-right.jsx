import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf7qg7_ih.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="bf7qg7_ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:chevron-right"} {...others} />);
}

export default Component;
