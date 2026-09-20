import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np74lyr1f.css';
import '../../css/o/oyd07mbzp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="np74lyr1f"/><path class="oyd07mbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:datasette-light"} {...others} />);
}

export default Component;
