import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swr6hcp_w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="swr6hcp_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:beaker-16"} {...others} />);
}

export default Component;
