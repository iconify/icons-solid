import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/madko4bbz.css';
import '../../css/f/fgkwccyip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="madko4bbz"/><path class="fgkwccyip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-left-down-bold-duotone"} {...others} />);
}

export default Component;
