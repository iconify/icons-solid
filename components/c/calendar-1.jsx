import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmynvddub.css';
import '../../css/z/z8qw-75lv.css';
import '../../css/y/y-7m5slpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bmynvddub"/><path class="z8qw-75lv"/><path class="y-7m5slpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:calendar-1"} {...others} />);
}

export default Component;
