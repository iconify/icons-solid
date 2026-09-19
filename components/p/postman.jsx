import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6n-h328k.css';
import '../../css/r/rjwj9migx.css';
import '../../css/d/domzjoixq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="i6n-h328k"/><path class="rjwj9migx"/><path class="domzjoixq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postman"} {...others} />);
}

export default Component;
