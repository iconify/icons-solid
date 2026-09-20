import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob3mk329u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob3mk329u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:letter-u-box"} {...others} />);
}

export default Component;
