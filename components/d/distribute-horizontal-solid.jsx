import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rs6p-wb4w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rs6p-wb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:distribute-horizontal-solid"} {...others} />);
}

export default Component;
