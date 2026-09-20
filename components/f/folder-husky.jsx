import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7l54zb3f.css';
import '../../css/d/d_z7b1b5x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c7l54zb3f"/><path class="d_z7b1b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-husky"} {...others} />);
}

export default Component;
