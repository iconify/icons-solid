import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbnjf8b6m.css';
import '../../css/r/rh3qbgbhi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fbnjf8b6m"/><path class="rh3qbgbhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-video"} {...others} />);
}

export default Component;
