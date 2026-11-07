import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwfo2luxv.css';
import '../../css/z/z1_6pqjiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwfo2luxv"/><path class="z1_6pqjiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-off-bold-duotone"} {...others} />);
}

export default Component;
