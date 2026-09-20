import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqlz9tzcy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dqlz9tzcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rotate-ccw-two-tone"} {...others} />);
}

export default Component;
