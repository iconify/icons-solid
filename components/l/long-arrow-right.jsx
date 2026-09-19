import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylobwvhsp.css';

const viewBox = {"width":1728,"height":1280};
const content = `<g transform="translate(1728 0) scale(-1 1)"><path class="ylobwvhsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:long-arrow-right"} {...others} />);
}

export default Component;
