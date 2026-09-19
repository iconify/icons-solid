import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jm4auib8w.css';
import '../../css/j/jdwxqt97w.css';
import '../../css/t/twqevhb_f.css';
import '../../css/v/vhpw_xe2b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jm4auib8w"/><circle class="jdwxqt97w"/><circle class="twqevhb_f"/><path class="vhpw_xe2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:steoller"} {...others} />);
}

export default Component;
