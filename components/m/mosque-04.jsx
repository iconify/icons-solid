import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cccuktftm.css';
import '../../css/i/ibl2pebdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cccuktftm"/><path class="ibl2pebdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mosque-04"} {...others} />);
}

export default Component;
