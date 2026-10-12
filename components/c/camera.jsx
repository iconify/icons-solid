import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ep52y5bwa.css';
import '../../css/w/wz-xrm3xs.css';
import '../../css/i/irsptrbee.css';
import '../../css/p/p94hnfbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ep52y5bwa"/><path class="wz-xrm3xs"/><path class="irsptrbee"/><circle transform="rotate(90 12 12.9)" class="p94hnfbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera"} {...others} />);
}

export default Component;
