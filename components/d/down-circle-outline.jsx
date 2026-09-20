import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi8hjkbam.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pi8hjkbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:down-circle-outline"} {...others} />);
}

export default Component;
