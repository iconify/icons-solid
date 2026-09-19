import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-9x3oqjr.css';

const viewBox = {"width":424,"height":496};
const content = `<path class="k-9x3oqjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:sort-desc"} {...others} />);
}

export default Component;
