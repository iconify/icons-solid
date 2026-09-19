import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9qqa1tma.css';

const viewBox = {"width":512,"height":384};
const content = `<path class="w9qqa1tma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:laptop-mac"} {...others} />);
}

export default Component;
