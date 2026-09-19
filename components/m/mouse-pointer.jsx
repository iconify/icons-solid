import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efp6-abvq.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="efp6-abvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:mouse-pointer"} {...others} />);
}

export default Component;
