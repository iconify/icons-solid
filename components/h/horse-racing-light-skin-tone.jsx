import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sekth5bur.css';
import '../../css/y/y-_3y1bfv.css';
import '../../css/h/hq1bfqbrr.css';
import '../../css/f/fvgiay17e.css';
import '../../css/l/lek_0g9bg.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/c/cimz4xtiw.css';
import '../../css/c/cwo2gdbtr.css';
import '../../css/a/asrbjhbuo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sekth5bur"/><path class="y-_3y1bfv"/><g class="hq1bfqbrr"><circle class="fvgiay17e"/><path class="lek_0g9bg"/></g><g class="x8poo_bjf"><circle class="cimz4xtiw"/><path class="cwo2gdbtr"/><path class="asrbjhbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:horse-racing-light-skin-tone"} {...others} />);
}

export default Component;
