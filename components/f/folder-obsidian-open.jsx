import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu4o5rbfd.css';
import '../../css/h/ho_37qg1k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cu4o5rbfd"/><path class="ho_37qg1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-obsidian-open"} {...others} />);
}

export default Component;
