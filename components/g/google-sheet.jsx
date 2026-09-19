import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gpycsr50z.css';
import '../../css/t/th55hbb_y.css';
import '../../css/e/ehux52bxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gpycsr50z"/><path class="th55hbb_y"/><path class="ehux52bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:google-sheet"} {...others} />);
}

export default Component;
