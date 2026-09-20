import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am92l0d3e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="am92l0d3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:tanuki-ai-off"} {...others} />);
}

export default Component;
