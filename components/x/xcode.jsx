import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kksrbfb_x.css';
import '../../css/x/xa3ht-bbv.css';
import '../../css/j/j3u72_b5w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kksrbfb_x"/><path class="xa3ht-bbv"/><path class="j3u72_b5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:xcode"} {...others} />);
}

export default Component;
