import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6jl_bkj.css';
import '../../css/g/gb7t1obix.css';
import '../../css/c/ca-lc-jmx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ly6jl_bkj"><path class="gb7t1obix"/><path class="ca-lc-jmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ulikecam"} {...others} />);
}

export default Component;
