import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0pyeiank.css';
import '../../css/r/r7c5xu-gz.css';
import '../../css/k/k_sbwgbaj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z0pyeiank"/><path class="r7c5xu-gz"/><path class="k_sbwgbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-branch-20"} {...others} />);
}

export default Component;
