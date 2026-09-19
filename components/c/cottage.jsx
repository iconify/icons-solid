import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bos0j4biy.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/j/joxvtybff.css';
import '../../css/f/fcl75_otk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bos0j4biy"/><circle class="rs-d_y_0o"/><path class="joxvtybff"/><path class="fcl75_otk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cottage"} {...others} />);
}

export default Component;
