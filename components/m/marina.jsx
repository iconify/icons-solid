import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry2ixoy8c.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ry2ixoy8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:marina"} {...others} />);
}

export default Component;
