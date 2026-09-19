import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/afz-hbc2x.css';
import '../../css/d/dfuqjjkyx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="afz-hbc2x"/><path class="dfuqjjkyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:swing"} {...others} />);
}

export default Component;
