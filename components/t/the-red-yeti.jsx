import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx0k6uber.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="vx0k6uber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:the-red-yeti"} {...others} />);
}

export default Component;
