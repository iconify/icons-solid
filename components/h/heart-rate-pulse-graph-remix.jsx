import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aogr9_c5h.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="aogr9_c5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:heart-rate-pulse-graph-remix"} {...others} />);
}

export default Component;
