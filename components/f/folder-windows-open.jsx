import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yypzf8b8r.css';
import '../../css/f/f-_fxyb8e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yypzf8b8r"/><path class="f-_fxyb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-windows-open"} {...others} />);
}

export default Component;
