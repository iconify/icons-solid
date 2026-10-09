import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhx89lryx.css';
import '../../css/r/r07ubeb7t.css';
import '../../css/d/d6b0ntifu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dhx89lryx"/><path class="r07ubeb7t"/><path class="d6b0ntifu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-charging-20"} {...others} />);
}

export default Component;
