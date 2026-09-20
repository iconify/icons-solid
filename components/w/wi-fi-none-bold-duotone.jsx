import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfsq0xb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tfsq0xb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-none-bold-duotone"} {...others} />);
}

export default Component;
