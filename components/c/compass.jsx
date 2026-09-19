import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/baen2yhxr.css';
import '../../css/o/opyzyd53f.css';
import '../../css/n/neptv8bgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="baen2yhxr"/><circle class="opyzyd53f"/><path class="neptv8bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:compass"} {...others} />);
}

export default Component;
