import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brftz6bit.css';
import '../../css/v/vj7j3db8g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="brftz6bit"/><path class="vj7j3db8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:laraveljetstream-wordmark"} {...others} />);
}

export default Component;
