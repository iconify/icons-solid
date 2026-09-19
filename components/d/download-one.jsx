import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eya7z3bzi.css';
import '../../css/j/j2k31gbuw.css';
import '../../css/r/r4eis3b_r.css';
import '../../css/d/dq4-gsbxv.css';
import '../../css/b/brl0tzdgt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="eya7z3bzi"/><path class="j2k31gbuw"/><path class="r4eis3b_r"/><path class="dq4-gsbxv"/><path class="brl0tzdgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:download-one"} {...others} />);
}

export default Component;
