import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4yt_rbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i4yt_rbsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hexagon-gloss"} {...others} />);
}

export default Component;
