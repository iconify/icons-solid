import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aprx8ebqb.css';
import '../../css/i/i3h3u4txt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aprx8ebqb"/><path class="i3h3u4txt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-helm-open"} {...others} />);
}

export default Component;
