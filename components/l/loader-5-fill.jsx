import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl8-tc6le.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sl8-tc6le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:loader-5-fill"} {...others} />);
}

export default Component;
