import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uc395w8uz.css';
import '../../css/x/xkbhbyrio.css';
import '../../css/o/oqb8-utyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uc395w8uz"/><path class="xkbhbyrio"/><path class="oqb8-utyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:css3"} {...others} />);
}

export default Component;
