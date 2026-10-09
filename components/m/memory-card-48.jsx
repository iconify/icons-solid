import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi5qdgtra.css';
import '../../css/o/owfc160qg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oi5qdgtra"/><path class="owfc160qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:memory-card-48"} {...others} />);
}

export default Component;
