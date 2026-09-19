import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtu_bi9-n.css';
import '../../css/p/puxz7qb3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vtu_bi9-n"/><path class="puxz7qb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:restaurant-sharp"} {...others} />);
}

export default Component;
