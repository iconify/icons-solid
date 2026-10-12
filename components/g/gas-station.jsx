import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnldg-tnw.css';
import '../../css/g/ggi55vaju.css';
import '../../css/r/rrsrqhbxb.css';
import '../../css/z/z66f1wbpe.css';
import '../../css/v/vj7hbzbzp.css';
import '../../css/n/nrsmctb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dnldg-tnw"/><path class="ggi55vaju"/><rect class="rrsrqhbxb"/><rect class="z66f1wbpe"/><path class="vj7hbzbzp"/><path class="nrsmctb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gas-station"} {...others} />);
}

export default Component;
