import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r48oh6fou.css';
import '../../css/z/zywwkol3n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r48oh6fou"/><path class="zywwkol3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-filter-open"} {...others} />);
}

export default Component;
