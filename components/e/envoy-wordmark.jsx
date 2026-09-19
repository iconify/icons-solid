import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exgu2ir-q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="exgu2ir-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:envoy-wordmark"} {...others} />);
}

export default Component;
