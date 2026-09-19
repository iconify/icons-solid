import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msgv33qhw.css';
import '../../css/n/np_h2lbss.css';
import '../../css/a/ay1ozab3a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="msgv33qhw"/><path class="np_h2lbss"/><path class="ay1ozab3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:align-items-center"} {...others} />);
}

export default Component;
