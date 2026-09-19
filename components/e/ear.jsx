import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/au2o4_vrz.css';
import '../../css/p/pgjtho3vt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="au2o4_vrz"/><path class="pgjtho3vt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:ear"} {...others} />);
}

export default Component;
