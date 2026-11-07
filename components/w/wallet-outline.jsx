import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyc7oevht.css';
import '../../css/g/g-rrphyqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyc7oevht"/><path clip-rule="evenodd" class="g-rrphyqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-outline"} {...others} />);
}

export default Component;
