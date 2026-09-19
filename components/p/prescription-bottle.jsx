import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njk0u4giu.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="njk0u4giu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:prescription-bottle"} {...others} />);
}

export default Component;
