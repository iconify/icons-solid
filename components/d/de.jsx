import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh9j6mi2w.css';
import '../../css/y/y51fahmwi.css';
import '../../css/y/yz98lyb1r.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="xh9j6mi2w"/><path class="y51fahmwi"/><path class="yz98lyb1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:de"} {...others} />);
}

export default Component;
