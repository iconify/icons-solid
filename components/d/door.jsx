import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d57uaiwla.css';
import '../../css/w/wtnptnb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d57uaiwla"/><path class="wtnptnb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:door"} {...others} />);
}

export default Component;
