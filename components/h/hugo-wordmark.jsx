import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he1q6_b1l.css';
import '../../css/v/vzzpw72td.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="he1q6_b1l"/><path class="vzzpw72td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:hugo-wordmark"} {...others} />);
}

export default Component;
