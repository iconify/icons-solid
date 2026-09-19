import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0cbo8bvk.css';
import '../../css/f/fd4fpfb_f.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="x0cbo8bvk"/><path class="fd4fpfb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-pdf"} {...others} />);
}

export default Component;
