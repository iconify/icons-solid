import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_qh4u67n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w_qh4u67n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:perplexity-ai-dark"} {...others} />);
}

export default Component;
