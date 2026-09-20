import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bad0-bbwy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bad0-bbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:full-screen-exit"} {...others} />);
}

export default Component;
