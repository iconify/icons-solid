import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfxjh-beo.css';
import '../../css/j/j94shoiso.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yfxjh-beo"/><path class="j94shoiso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kubernetes"} {...others} />);
}

export default Component;
