import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k4xah3b6c.css';
import '../../css/w/whl43ccdj.css';
import '../../css/k/kihtoab6b.css';

const viewBox = {"width":840,"height":840};
const content = `<g class="bi12bsetm"><path class="k4xah3b6c"/><path class="whl43ccdj"/><path class="kihtoab6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:seus-community"} {...others} />);
}

export default Component;
