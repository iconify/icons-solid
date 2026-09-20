import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx9qcfbri.css';
import '../../css/e/ewlo7db9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hx9qcfbri"/><path class="ewlo7db9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-pdm"} {...others} />);
}

export default Component;
