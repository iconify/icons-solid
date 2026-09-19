import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1jd9vhko.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="y1jd9vhko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:accounts-alt"} {...others} />);
}

export default Component;
