import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm0hikb7f.css';
import '../../css/f/fc2_4nl4g.css';
import '../../css/v/vczsbmbgz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zm0hikb7f"/><path clip-rule="evenodd" class="fc2_4nl4g"/><path class="vczsbmbgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:weblate-wordmark"} {...others} />);
}

export default Component;
