import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9skdhbhr.css';
import '../../css/m/mg5nb2b6y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q9skdhbhr"/><path class="mg5nb2b6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:swagger-wordmark"} {...others} />);
}

export default Component;
