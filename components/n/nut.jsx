import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sz4revdyj.css';
import '../../css/m/mo0h-x4lp.css';
import '../../css/r/ru0g9b5-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sz4revdyj"/><path class="mo0h-x4lp"/><path class="ru0g9b5-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:nut"} {...others} />);
}

export default Component;
