import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf5-4acxm.css';
import '../../css/b/beal5kb9o.css';
import '../../css/i/idlt776qa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jf5-4acxm"/><path class="beal5kb9o"/><path class="idlt776qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:medal-20-bold"} {...others} />);
}

export default Component;
