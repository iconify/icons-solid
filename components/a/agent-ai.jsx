import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbgu8eb0z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hbgu8eb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:agent-ai"} {...others} />);
}

export default Component;
