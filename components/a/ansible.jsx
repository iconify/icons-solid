import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhjb4mbgw.css';
import '../../css/v/vv_2udbvh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xhjb4mbgw"/><path class="vv_2udbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ansible"} {...others} />);
}

export default Component;
