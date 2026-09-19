import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/irwinbc_r.css';
import '../../css/w/wimlky-am.css';
import '../../css/c/ch1wpxbeu.css';
import '../../css/l/l5xzt3e9a.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="irwinbc_r"/><path class="wimlky-am"/><path class="ch1wpxbeu"/><path class="l5xzt3e9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-bump-outline"} {...others} />);
}

export default Component;
