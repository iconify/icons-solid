import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw653obdk.css';
import '../../css/m/mhkxhvbuh.css';
import '../../css/a/a3iyb8b5v.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bw653obdk"/><path class="mhkxhvbuh"/><path class="a3iyb8b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-vertical-ellipse"} {...others} />);
}

export default Component;
