import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4y_w4s9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p4y_w4s9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:streamplay-logo"} {...others} />);
}

export default Component;
