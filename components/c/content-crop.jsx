import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4-dr1gfb.css';
import '../../css/q/qql1b-83c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x4-dr1gfb"/><path class="qql1b-83c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-crop"} {...others} />);
}

export default Component;
