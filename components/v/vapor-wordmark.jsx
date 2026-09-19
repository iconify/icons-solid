import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo6_k6b5l.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bo6_k6b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:vapor-wordmark"} {...others} />);
}

export default Component;
