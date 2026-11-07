import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwnu8vvwz.css';
import '../../css/a/ah0oz-g8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwnu8vvwz"/><path class="ah0oz-g8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:forbidden-circle-bold-duotone"} {...others} />);
}

export default Component;
