import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peu9dxqux.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="peu9dxqux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:deal-outline"} {...others} />);
}

export default Component;
