import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb0kjw99d.css';

const viewBox = {"width":440,"height":432};
const content = `<path class="fb0kjw99d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:alarm-off"} {...others} />);
}

export default Component;
