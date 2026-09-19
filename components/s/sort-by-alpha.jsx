import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj1u2fbvd.css';

const viewBox = {"width":424,"height":496};
const content = `<path class="hj1u2fbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:sort-by-alpha"} {...others} />);
}

export default Component;
