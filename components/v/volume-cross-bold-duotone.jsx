import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkgxa5i2k.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/i/iaue1ubqv.css';
import '../../css/y/yfaivcbbe.css';
import '../../css/a/a1bispcjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tkgxa5i2k"/><g class="xtpeb-edw"><path class="iaue1ubqv"/><path class="yfaivcbbe"/><path class="a1bispcjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-cross-bold-duotone"} {...others} />);
}

export default Component;
