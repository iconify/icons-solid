import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsijkbbus.css';
import '../../css/r/rd09_mylf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hsijkbbus"/><path class="rd09_mylf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-license-open"} {...others} />);
}

export default Component;
