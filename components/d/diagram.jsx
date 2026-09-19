import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4t-l8b1f.css';
import '../../css/e/ew86px5aw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m4t-l8b1f"/><path class="ew86px5aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:diagram"} {...others} />);
}

export default Component;
