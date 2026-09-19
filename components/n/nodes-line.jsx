import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlvvaabff.css';
import '../../css/e/egt81mk0n.css';
import '../../css/p/p48pzfb2s.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 nlvvaabff"/><path class="clr-i-outline clr-i-outline-path-2 egt81mk0n"/><path class="clr-i-outline clr-i-outline-path-3 p48pzfb2s"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:nodes-line"} {...others} />);
}

export default Component;
