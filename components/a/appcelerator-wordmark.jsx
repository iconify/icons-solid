import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x196-gi3w.css';
import '../../css/a/a04-1rvkl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="x196-gi3w"/><path class="a04-1rvkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:appcelerator-wordmark"} {...others} />);
}

export default Component;
