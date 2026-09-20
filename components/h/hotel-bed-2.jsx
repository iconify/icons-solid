import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uw96okwiv.css';
import '../../css/t/tsxwhyprz.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/z/ze4pz4niq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uw96okwiv"/><path class="tsxwhyprz"/><path class="sj71gtfbi"/><path class="ze4pz4niq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hotel-bed-2"} {...others} />);
}

export default Component;
