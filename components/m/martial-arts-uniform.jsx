import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjbuxzbyq.css';
import '../../css/z/zm-4i3bkf.css';
import '../../css/u/uwejgzb-w.css';
import '../../css/x/x_ran4b0a.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/i_3m551ae.css';
import '../../css/t/t405-p_dx.css';
import '../../css/v/vpo7lcrcv.css';
import '../../css/w/w-kj5frfg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fjbuxzbyq"/><path class="zm-4i3bkf"/><path class="uwejgzb-w"/><path class="x_ran4b0a"/><g class="ij2x_72vy"><path class="i_3m551ae"/><path class="t405-p_dx"/><path class="vpo7lcrcv"/><path class="w-kj5frfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:martial-arts-uniform"} {...others} />);
}

export default Component;
