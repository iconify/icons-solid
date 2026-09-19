import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7nqbbw5k.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="j7nqbbw5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:datadog"} {...others} />);
}

export default Component;
