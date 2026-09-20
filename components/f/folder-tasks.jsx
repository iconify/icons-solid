import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6cjc0bct.css';
import '../../css/c/cr1evbbps.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v6cjc0bct"/><path class="cr1evbbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-tasks"} {...others} />);
}

export default Component;
