import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwia98bio.css';
import '../../css/y/yd8vu0b0e.css';
import '../../css/s/sd838mbnn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pwia98bio"/><path class="yd8vu0b0e"/><path class="sd838mbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-docker-open"} {...others} />);
}

export default Component;
