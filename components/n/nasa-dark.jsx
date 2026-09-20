import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzdafi6np.css';
import '../../css/x/xlao23b1c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rzdafi6np"/><path class="xlao23b1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nasa-dark"} {...others} />);
}

export default Component;
