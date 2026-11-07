import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swvwx0b5q.css';
import '../../css/q/qzj3lla5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swvwx0b5q"/><path clip-rule="evenodd" class="qzj3lla5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-angle-2-outline"} {...others} />);
}

export default Component;
