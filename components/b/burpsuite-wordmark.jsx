import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-36k731j.css';
import '../../css/d/d9et4l_ew.css';
import '../../css/j/jwqccdbxc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="j-36k731j"/><path class="d9et4l_ew"/><path class="jwqccdbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:burpsuite-wordmark"} {...others} />);
}

export default Component;
