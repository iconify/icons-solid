import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky-xdub6b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ky-xdub6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:jewelry-fill"} {...others} />);
}

export default Component;
