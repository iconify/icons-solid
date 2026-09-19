import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y8kmk8bdt.css';
import '../../css/x/xk4qsobhv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="y8kmk8bdt"/><path class="xk4qsobhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cook"} {...others} />);
}

export default Component;
