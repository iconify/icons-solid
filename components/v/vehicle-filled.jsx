import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejbswtb9o.css';
import '../../css/d/dkt4s1bma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejbswtb9o"/><path class="dkt4s1bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:vehicle-filled"} {...others} />);
}

export default Component;
