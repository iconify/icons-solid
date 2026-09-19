import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl-8y1hvp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tl-8y1hvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:shield-cat"} {...others} />);
}

export default Component;
