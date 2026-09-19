import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7rn45-1q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u7rn45-1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:frankenphp-wordmark"} {...others} />);
}

export default Component;
