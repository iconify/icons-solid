import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/ka3emi0uf.css';
import '../../css/r/rwas1e4is.css';
import '../../css/a/apswarb1h.css';
import '../../css/u/ucxxfd9jl.css';
import '../../css/z/zhre2cbug.css';
import '../../css/r/r4udylbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ka3emi0uf"/><path class="rwas1e4is"/><path class="apswarb1h"/><path class="ucxxfd9jl"/><path class="zhre2cbug"/><path class="r4udylbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:wind"} {...others} />);
}

export default Component;
