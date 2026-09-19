import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fjetg3ljf.css';
import '../../css/w/w8_xcql2x.css';
import '../../css/f/fcu0vbbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fjetg3ljf"/><path class="w8_xcql2x"/><path class="fcu0vbbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:brick-wall-fire"} {...others} />);
}

export default Component;
