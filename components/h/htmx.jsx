import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7xw2l-ms.css';
import '../../css/v/vp3r9_80y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="e7xw2l-ms"/><path class="vp3r9_80y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:htmx"} {...others} />);
}

export default Component;
