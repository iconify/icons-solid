import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk1ju-bpp.css';
import '../../css/g/gn7jhi5kh.css';
import '../../css/j/jvodmxq9q.css';
import '../../css/q/q0ifr8ahi.css';
import '../../css/e/e-fhcwqwr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dk1ju-bpp"/><path class="gn7jhi5kh"/><path class="jvodmxq9q"/><path class="q0ifr8ahi"/><path class="e-fhcwqwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:threejs-wordmark"} {...others} />);
}

export default Component;
