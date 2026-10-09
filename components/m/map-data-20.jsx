import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg3i25mms.css';
import '../../css/u/u80q53cnt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tg3i25mms"/><path class="u80q53cnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-data-20"} {...others} />);
}

export default Component;
