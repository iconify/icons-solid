import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4wxfh01e.css';
import '../../css/n/ni-dbjlax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j4wxfh01e"/><path class="ni-dbjlax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:visual-studio-code-dark"} {...others} />);
}

export default Component;
