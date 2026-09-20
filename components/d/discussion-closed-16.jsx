import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k74075dxs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k74075dxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:discussion-closed-16"} {...others} />);
}

export default Component;
