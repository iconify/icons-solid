import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0c1nwb0d.css';
import '../../css/e/eu1xw2b6r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j0c1nwb0d"/><path class="eu1xw2b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-stylus-open"} {...others} />);
}

export default Component;
