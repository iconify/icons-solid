import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m81bi_bfe.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m81bi_bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:opentelemetry-wordmark"} {...others} />);
}

export default Component;
