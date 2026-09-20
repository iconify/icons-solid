import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chdz1wbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chdz1wbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:comment-bookmark-outline"} {...others} />);
}

export default Component;
