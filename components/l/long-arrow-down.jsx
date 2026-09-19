import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st6matk8b.css';

const viewBox = {"width":768,"height":1728};
const content = `<g transform="translate(0 1728) scale(1 -1)"><path class="st6matk8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:long-arrow-down"} {...others} />);
}

export default Component;
