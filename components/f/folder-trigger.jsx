import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8v7vu7pd.css';
import '../../css/i/i_73qioux.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c8v7vu7pd"/><path class="i_73qioux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-trigger"} {...others} />);
}

export default Component;
