import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfi_pwizc.css';
import '../../css/t/tc8lqywfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfi_pwizc"/><path class="tc8lqywfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-bold"} {...others} />);
}

export default Component;
