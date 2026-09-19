import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dupyj627c.css';
import '../../css/k/ktm1oebij.css';
import '../../css/i/isim6mblg.css';
import '../../css/h/h7ir0wg9q.css';
import '../../css/c/c3zf2ccth.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dupyj627c"/><path class="ktm1oebij"/><path class="isim6mblg"/><path class="h7ir0wg9q"/><path class="c3zf2ccth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:hadoop"} {...others} />);
}

export default Component;
