import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmc-p6bhg.css';
import '../../css/t/tjqy8lb7t.css';
import '../../css/d/dfdn618zu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xmc-p6bhg"/><path class="tjqy8lb7t"/><path class="dfdn618zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rose"} {...others} />);
}

export default Component;
