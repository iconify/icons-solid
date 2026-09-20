import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng8t65b2q.css';
import '../../css/r/rhohvnbdk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ng8t65b2q"/><path class="rhohvnbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-job-open"} {...others} />);
}

export default Component;
