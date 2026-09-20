import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy-wlb8oo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dy-wlb8oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-ip"} {...others} />);
}

export default Component;
