import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cznruvbvt.css';
import '../../css/c/chixjsepu.css';
import '../../css/i/ixq7gpbhu.css';
import '../../css/e/ev1h7fb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cznruvbvt"/><path class="chixjsepu"/><path class="ixq7gpbhu"/><path class="ev1h7fb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wi-fi-angle-bold-duotone"} {...others} />);
}

export default Component;
