import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lih_j9_oa.css';
import '../../css/d/debdggzbs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lih_j9_oa"/><path class="debdggzbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-taskfile-open"} {...others} />);
}

export default Component;
