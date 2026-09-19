import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxj0xs36a.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="sxj0xs36a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:star-circle"} {...others} />);
}

export default Component;
