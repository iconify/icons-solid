import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iq538skyr.css';
import '../../css/i/i54izb3il.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="iq538skyr"/><path class="i54izb3il"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:netlify"} {...others} />);
}

export default Component;
