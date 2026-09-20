import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7-8-1t_u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l7-8-1t_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-circle-with-dot"} {...others} />);
}

export default Component;
