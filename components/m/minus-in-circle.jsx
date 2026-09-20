import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxe03ccvs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wxe03ccvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:minus-in-circle"} {...others} />);
}

export default Component;
