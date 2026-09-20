import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bov0584ws.css';
import '../../css/u/u6f-okb0z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bov0584ws"/><path class="u6f-okb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openai"} {...others} />);
}

export default Component;
