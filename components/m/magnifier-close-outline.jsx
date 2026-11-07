import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmcky1b9o.css';
import '../../css/v/vyk6wnbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmcky1b9o"/><path clip-rule="evenodd" class="vyk6wnbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-close-outline"} {...others} />);
}

export default Component;
