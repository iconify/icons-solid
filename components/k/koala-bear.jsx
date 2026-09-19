import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch_tinmug.css';
import '../../css/e/ejhz2c5ze.css';
import '../../css/i/irheceavw.css';
import '../../css/z/z-byh2wlf.css';
import '../../css/r/rlocaobos.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="ch_tinmug"/><path class="ejhz2c5ze"/><circle class="irheceavw"/><circle class="z-byh2wlf"/><path class="rlocaobos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:koala-bear"} {...others} />);
}

export default Component;
