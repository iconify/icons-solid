import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyk16jb8z.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="xyk16jb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:rockrms"} {...others} />);
}

export default Component;
