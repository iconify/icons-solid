import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnk1gt9lb.css';
import '../../css/y/y4jnwib3d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xnk1gt9lb"/><path class="y4jnwib3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:file-zip"} {...others} />);
}

export default Component;
