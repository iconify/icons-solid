import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bgbj4bbsf.css';
import '../../css/j/jjfdtqb5r.css';
import '../../css/t/t4z_kdmpn.css';
import '../../css/n/n6ojxbbex.css';
import '../../css/w/wrkbx9bny.css';
import '../../css/o/o8ssdcf6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bgbj4bbsf wm-deco"/><path class="jjfdtqb5r wm-deco"/><path class="t4z_kdmpn wm-deco"/><path class="n6ojxbbex wm-k"/><path class="wm-a wrkbx9bny"/><path class="o8ssdcf6c wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dna-blueprint"} {...others} />);
}

export default Component;
