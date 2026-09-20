import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8qgey2bj.css';
import '../../css/r/r-proe0do.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b8qgey2bj"/><path class="r-proe0do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-database-open"} {...others} />);
}

export default Component;
