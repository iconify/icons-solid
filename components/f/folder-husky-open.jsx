import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u48mzcbuj.css';
import '../../css/d/d_z7b1b5x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u48mzcbuj"/><path class="d_z7b1b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-husky-open"} {...others} />);
}

export default Component;
