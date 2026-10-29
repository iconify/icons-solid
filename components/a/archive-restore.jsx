import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-yfr4nfe.css';
import '../../css/r/r5-p2f5wy.css';
import '../../css/w/wyg1c-b8s.css';
import '../../css/t/t61ttqb6z.css';
import '../../css/x/x2oneleks.css';
import '../../css/r/r6o_87b9e.css';
import '../../css/f/f5_ixhbxl.css';
import '../../css/s/s7hewib_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-yfr4nfe wm-shadow"/><path class="r5-p2f5wy wm-k"/><path class="wm-k wyg1c-b8s"/><path class="t61ttqb6z wm-k"/><path class="wm-k x2oneleks"/><path class="r6o_87b9e wm-k"/><path class="f5_ixhbxl wm-shine"/><path class="s7hewib_f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:archive-restore"} {...others} />);
}

export default Component;
