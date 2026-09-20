import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aeks_mbgq.css';
import '../../css/m/m7hm-zmpb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aeks_mbgq"/><path class="m7hm-zmpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:octoface-16"} {...others} />);
}

export default Component;
