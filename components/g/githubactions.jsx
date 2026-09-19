import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmqemt8zm.css';
import '../../css/k/katrf5x9c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rmqemt8zm"/><path class="katrf5x9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:githubactions"} {...others} />);
}

export default Component;
