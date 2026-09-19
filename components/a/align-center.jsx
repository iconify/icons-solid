import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/ocjna_bnt.css';
import '../../css/f/fnd2alblp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="ocjna_bnt"/><path class="fnd2alblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:align-center"} {...others} />);
}

export default Component;
