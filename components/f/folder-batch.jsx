import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiap8ebun.css';
import '../../css/l/lommj4luf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aiap8ebun"/><path class="lommj4luf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-batch"} {...others} />);
}

export default Component;
