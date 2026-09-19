import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw006larm.css';
import '../../css/f/fiyc44jpu.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hw006larm"/><path class="fiyc44jpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:junie-wordmark"} {...others} />);
}

export default Component;
