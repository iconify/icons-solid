import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2_vu7bxs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q2_vu7bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:controls-vertical"} {...others} />);
}

export default Component;
