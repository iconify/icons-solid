import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s02o69bfv.css';
import '../../css/y/yslzmeb8y.css';
import '../../css/j/jwcfy35xs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s02o69bfv"/><path class="yslzmeb8y"/><path clip-rule="evenodd" class="jwcfy35xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-bold-duotone"} {...others} />);
}

export default Component;
