import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axqjiccfh.css';
import '../../css/n/nuioz00-q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="axqjiccfh"/><path class="nuioz00-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:stimulus-wordmark"} {...others} />);
}

export default Component;
