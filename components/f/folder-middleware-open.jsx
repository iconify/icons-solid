import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_4c-ac4q.css';
import '../../css/q/qrs0kj75x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f_4c-ac4q"/><path class="qrs0kj75x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-middleware-open"} {...others} />);
}

export default Component;
