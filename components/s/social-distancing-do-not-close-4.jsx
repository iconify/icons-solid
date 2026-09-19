import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8qx07_1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8qx07_1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-do-not-close-4"} {...others} />);
}

export default Component;
