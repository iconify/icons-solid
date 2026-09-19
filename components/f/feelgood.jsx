import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t2gsdyb8i.css';
import '../../css/e/euzfwrbhu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t2gsdyb8i"/><path class="euzfwrbhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:feelgood"} {...others} />);
}

export default Component;
