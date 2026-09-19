import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/k/k4fjjgpne.css';
import '../../css/c/cb4pivbaa.css';
import '../../css/k/k2vonydvu.css';
import '../../css/o/omy26obvw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="k4fjjgpne"/><path class="cb4pivbaa"/><path class="k2vonydvu"/><path class="omy26obvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-light-1-bold"} {...others} />);
}

export default Component;
