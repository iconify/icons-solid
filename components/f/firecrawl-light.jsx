import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yun3io12r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yun3io12r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:firecrawl-light"} {...others} />);
}

export default Component;
