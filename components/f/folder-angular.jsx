import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgvb62whh.css';
import '../../css/b/by_2vzhqi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vgvb62whh"/><path class="by_2vzhqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-angular"} {...others} />);
}

export default Component;
