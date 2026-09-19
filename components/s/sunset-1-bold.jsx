import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mof-mqc8u.css';
import '../../css/z/z4rdixorf.css';
import '../../css/o/o3x5bbc6l.css';
import '../../css/n/nenukhlts.css';
import '../../css/p/pqgz9bbzv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mof-mqc8u"/><path class="z4rdixorf"/><path class="o3x5bbc6l"/><path class="nenukhlts"/><path class="pqgz9bbzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunset-1-bold"} {...others} />);
}

export default Component;
