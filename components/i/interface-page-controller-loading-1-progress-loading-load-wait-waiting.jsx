import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd0wgkb4f.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yd0wgkb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-page-controller-loading-1-progress-loading-load-wait-waiting"} {...others} />);
}

export default Component;
