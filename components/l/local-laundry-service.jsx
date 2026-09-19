import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buhwby_ug.css';

const viewBox = {"width":344,"height":432};
const content = `<path class="buhwby_ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:local-laundry-service"} {...others} />);
}

export default Component;
