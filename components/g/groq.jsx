import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa5z70b5c.css';
import '../../css/a/aa_dfybgb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qa5z70b5c"/><path class="aa_dfybgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:groq"} {...others} />);
}

export default Component;
