import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sui2wjb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sui2wjb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:google-play-line"} {...others} />);
}

export default Component;
