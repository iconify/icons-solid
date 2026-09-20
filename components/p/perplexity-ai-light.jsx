import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erj7oo6ms.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erj7oo6ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:perplexity-ai-light"} {...others} />);
}

export default Component;
