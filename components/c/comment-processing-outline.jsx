import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh-p1r4cs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh-p1r4cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:comment-processing-outline"} {...others} />);
}

export default Component;
