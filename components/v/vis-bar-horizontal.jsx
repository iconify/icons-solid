import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jli5rnb2m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jli5rnb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-bar-horizontal"} {...others} />);
}

export default Component;
