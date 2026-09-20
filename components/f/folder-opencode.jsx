import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7l54zb3f.css';
import '../../css/y/yb1s09s6e.css';
import '../../css/a/atc24d7cn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c7l54zb3f"/><g transform="translate(-9.24 -.5)"><path class="yb1s09s6e"/><rect class="atc24d7cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-opencode"} {...others} />);
}

export default Component;
