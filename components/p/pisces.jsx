import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dne0f28rx.css';
import '../../css/e/eh2al18pm.css';
import '../../css/u/uvt7l6bmh.css';
import '../../css/v/vo71evf5d.css';
import '../../css/j/jg7xkykgs.css';
import '../../css/c/cn8x3ob0p.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dne0f28rx"><path class="eh2al18pm"/><path class="uvt7l6bmh"/></g><path class="vo71evf5d"/><path class="jg7xkykgs"/><path class="cn8x3ob0p"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pisces"} {...others} />);
}

export default Component;
