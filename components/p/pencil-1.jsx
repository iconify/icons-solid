import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcz2a8bsd.css';
import '../../css/q/qagdjebam.css';
import '../../css/c/c6eoz-bnz.css';
import '../../css/v/v89bqvxpp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mcz2a8bsd"/><path clip-rule="evenodd" class="qagdjebam"/><path clip-rule="evenodd" class="c6eoz-bnz"/><path class="v89bqvxpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pencil-1"} {...others} />);
}

export default Component;
