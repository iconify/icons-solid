import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf7zolb1b.css';
import '../../css/l/l6ei140ow.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jf7zolb1b"/><path class="l6ei140ow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:copilot"} {...others} />);
}

export default Component;
