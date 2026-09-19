import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xemra3bhx.css';
import '../../css/v/vfn6b26gs.css';
import '../../css/n/njdlg4bft.css';
import '../../css/v/vmc9b_bpg.css';
import '../../css/s/syv5jmb2w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xemra3bhx"/><path class="vfn6b26gs"/><path clip-rule="evenodd" class="njdlg4bft"/><path class="vmc9b_bpg"/><path clip-rule="evenodd" class="syv5jmb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pharmacy-1"} {...others} />);
}

export default Component;
