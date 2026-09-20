import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpyz49q5o.css';
import '../../css/h/hyjsfrrwi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gpyz49q5o"/><path class="hyjsfrrwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-blender-open"} {...others} />);
}

export default Component;
