import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi9dt8sqd.css';
import '../../css/n/n5fgqfbkk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vi9dt8sqd"/><path class="n5fgqfbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-views-open"} {...others} />);
}

export default Component;
