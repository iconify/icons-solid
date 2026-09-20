import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwi-yg3xg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwi-yg3xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:book-open"} {...others} />);
}

export default Component;
