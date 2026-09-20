import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipk0zxblz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ipk0zxblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:home-7-fill"} {...others} />);
}

export default Component;
