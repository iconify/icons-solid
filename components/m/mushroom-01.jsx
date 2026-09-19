import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sobuolbzi.css';
import '../../css/o/oscz0rbfq.css';
import '../../css/u/uvu2ukbyu.css';
import '../../css/m/mpwgpvmje.css';
import '../../css/c/cyn2jacob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sobuolbzi"/><path class="oscz0rbfq"/><path class="uvu2ukbyu"/><path class="mpwgpvmje"/><path class="cyn2jacob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mushroom-01"} {...others} />);
}

export default Component;
