import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt0urabjs.css';
import '../../css/m/mgxmn9o8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rt0urabjs"/><path class="mgxmn9o8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:filter-duotone"} {...others} />);
}

export default Component;
