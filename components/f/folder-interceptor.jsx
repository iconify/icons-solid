import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbnjf8b6m.css';
import '../../css/k/k9nz5w0-m.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fbnjf8b6m"/><path class="k9nz5w0-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-interceptor"} {...others} />);
}

export default Component;
