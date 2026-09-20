import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhsg9bc_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhsg9bc_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:analytics"} {...others} />);
}

export default Component;
