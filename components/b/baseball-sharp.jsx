import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4-rnsbij.css';
import '../../css/m/mf2yaebts.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g4-rnsbij"/><path class="mf2yaebts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:baseball-sharp"} {...others} />);
}

export default Component;
