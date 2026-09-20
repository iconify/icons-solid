import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg3_8ibzz.css';
import '../../css/e/e9mzgf6-d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eg3_8ibzz"/><path class="e9mzgf6-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-markdown-open"} {...others} />);
}

export default Component;
