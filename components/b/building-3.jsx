import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h7cylubiz.css';
import '../../css/k/kqn2r7evb.css';
import '../../css/d/dpqsedb_j.css';
import '../../css/n/nok0fdb-s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="h7cylubiz"/><path class="kqn2r7evb"/><path class="dpqsedb_j"/><path class="nok0fdb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:building-3"} {...others} />);
}

export default Component;
