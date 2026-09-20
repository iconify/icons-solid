import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl0vbpbky.css';
import '../../css/x/xq0giqbry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gl0vbpbky"/><path class="xq0giqbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:comment-alt-plus"} {...others} />);
}

export default Component;
