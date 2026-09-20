import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjn0pz9-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjn0pz9-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:perplexity-fill"} {...others} />);
}

export default Component;
