import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_xcfvbzc.css';
import '../../css/j/jv6_y7bhu.css';
import '../../css/l/l823lc5hz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w_xcfvbzc"/><path class="jv6_y7bhu"/><path class="l823lc5hz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:scroll-bar"} {...others} />);
}

export default Component;
