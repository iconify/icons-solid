import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up2j63u8p.css';
import '../../css/c/cl9xofbwx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="up2j63u8p"/><path class="cl9xofbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-go-open"} {...others} />);
}

export default Component;
