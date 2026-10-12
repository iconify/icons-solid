import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5jbthbxl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r5jbthbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:x-circle-stroke-20"} {...others} />);
}

export default Component;
