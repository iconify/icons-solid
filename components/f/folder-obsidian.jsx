import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4b_j2glt.css';
import '../../css/h/ho_37qg1k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f4b_j2glt"/><path class="ho_37qg1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-obsidian"} {...others} />);
}

export default Component;
