import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_jbvkbbv.css';
import '../../css/y/ypv4l3ivv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j_jbvkbbv"/><path class="ypv4l3ivv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-error-stroke-20"} {...others} />);
}

export default Component;
