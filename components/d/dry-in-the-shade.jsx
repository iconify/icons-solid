import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btuo36bhm.css';

const viewBox = {"width":432,"height":512};
const content = `<path class="btuo36bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:dry-in-the-shade"} {...others} />);
}

export default Component;
