import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnxt--b2x.css';
import '../../css/k/knraakbcn.css';
import '../../css/b/bhedg2bcn.css';
import '../../css/o/opankvl_l.css';
import '../../css/r/r3n5semei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rnxt--b2x wm-k"/><path class="knraakbcn wm-shine"/><path class="bhedg2bcn wm-shine"/><path class="opankvl_l wm-shine"/><path class="r3n5semei wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:sticky-note"} {...others} />);
}

export default Component;
