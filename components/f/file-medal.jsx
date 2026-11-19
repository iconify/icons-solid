import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdn11nisd.css';
import '../../css/r/r_oebub4u.css';
import '../../css/g/ga-p-vblj.css';
import '../../css/v/vgpr6_skd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jdn11nisd"/><path class="r_oebub4u"/><path class="ga-p-vblj"/><path class="vgpr6_skd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-medal"} {...others} />);
}

export default Component;
