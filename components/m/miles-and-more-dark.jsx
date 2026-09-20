import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t918cikpr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t918cikpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:miles-and-more-dark"} {...others} />);
}

export default Component;
