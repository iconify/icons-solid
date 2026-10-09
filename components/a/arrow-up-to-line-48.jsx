import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7lu9sbrx.css';
import '../../css/r/rqz9a6b2h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7lu9sbrx"/><path class="rqz9a6b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-to-line-48"} {...others} />);
}

export default Component;
