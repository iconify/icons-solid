import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2-3o1b3b.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-1.5};
const content = `<path class="v2-3o1b3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:music-f"} {...others} />);
}

export default Component;
