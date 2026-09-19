import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9vv6pb3m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p9vv6pb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:webpack-wordmark"} {...others} />);
}

export default Component;
