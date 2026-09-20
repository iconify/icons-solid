import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thk9tudjp.css';
import '../../css/n/ni5juab4k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="thk9tudjp"/><path class="ni5juab4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-zed"} {...others} />);
}

export default Component;
