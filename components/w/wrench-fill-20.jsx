import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry-l2ebjf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ry-l2ebjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wrench-fill-20"} {...others} />);
}

export default Component;
