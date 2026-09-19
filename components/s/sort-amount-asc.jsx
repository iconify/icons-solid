import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqd5hab-o.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="lqd5hab-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:sort-amount-asc"} {...others} />);
}

export default Component;
