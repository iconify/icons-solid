import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2zfbfbns.css';
import '../../css/m/m8_yakbvd.css';
import '../../css/w/wurw0faww.css';
import '../../css/m/mt8xaybfz.css';
import '../../css/x/x0jgdesyz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c2zfbfbns"/><path class="m8_yakbvd"/><path class="wurw0faww"/><path class="mt8xaybfz"/><path class="x0jgdesyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:homebrew"} {...others} />);
}

export default Component;
