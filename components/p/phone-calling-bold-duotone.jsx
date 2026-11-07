import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j05r12o9z.css';
import '../../css/y/yslzmeb8y.css';
import '../../css/j/jwcfy35xs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j05r12o9z"/><path class="yslzmeb8y"/><path clip-rule="evenodd" class="jwcfy35xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-bold-duotone"} {...others} />);
}

export default Component;
