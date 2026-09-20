import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yasv75-0z.css';
import '../../css/l/lommj4luf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yasv75-0z"/><path class="lommj4luf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-batch-open"} {...others} />);
}

export default Component;
