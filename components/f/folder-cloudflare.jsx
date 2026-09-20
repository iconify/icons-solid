import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceuecc10c.css';
import '../../css/d/dpy7q7boi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ceuecc10c"/><path class="dpy7q7boi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cloudflare"} {...others} />);
}

export default Component;
