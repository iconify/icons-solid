import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/unl5bqbcz.css';
import '../../css/o/oe0gzwqgz.css';
import '../../css/n/n3l509bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="unl5bqbcz"/><path class="oe0gzwqgz"/><path class="n3l509bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:microscope"} {...others} />);
}

export default Component;
