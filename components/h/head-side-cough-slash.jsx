import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np_7-4bcq.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="np_7-4bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:head-side-cough-slash"} {...others} />);
}

export default Component;
