import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e6b2l1b0w.css';
import '../../css/j/jzj6tdhdx.css';
import '../../css/c/c_zwkzr4c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e6b2l1b0w"/><path class="jzj6tdhdx"/><path class="c_zwkzr4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:skates"} {...others} />);
}

export default Component;
