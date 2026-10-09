import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-5gvsbjv.css';
import '../../css/j/j89f_0dyx.css';
import '../../css/r/re3ef0big.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u-5gvsbjv"/><path class="j89f_0dyx"/><path class="re3ef0big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-merge-20-bold"} {...others} />);
}

export default Component;
