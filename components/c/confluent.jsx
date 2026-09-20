import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt7qn8zzv.css';
import '../../css/u/uti-o7bls.css';
import '../../css/e/e3gzvobfa.css';

const viewBox = {"width":212,"height":41};
const content = `<g class="rt7qn8zzv"><path class="uti-o7bls"/><path class="e3gzvobfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:confluent"} {...others} />);
}

export default Component;
