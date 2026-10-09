import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg1-fhq_s.css';
import '../../css/p/p9d7ykejn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pg1-fhq_s"/><path class="p9d7ykejn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-snow-48-bold"} {...others} />);
}

export default Component;
