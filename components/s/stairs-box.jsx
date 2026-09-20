import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwo1j0b4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwo1j0b4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:stairs-box"} {...others} />);
}

export default Component;
