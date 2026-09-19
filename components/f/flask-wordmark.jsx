import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6z79faub.css';
import '../../css/d/d7sn98bii.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="j6z79faub"/><path class="d7sn98bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:flask-wordmark"} {...others} />);
}

export default Component;
