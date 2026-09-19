import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvxngrb6q.css';
import '../../css/a/agtqjebkp.css';
import '../../css/z/zcm883c4b.css';
import '../../css/n/n2kkpqb1j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="uvxngrb6q"/><path clip-rule="evenodd" class="agtqjebkp"/><path class="zcm883c4b"/><path clip-rule="evenodd" class="n2kkpqb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-3-outline"} {...others} />);
}

export default Component;
