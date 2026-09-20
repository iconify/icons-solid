import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia92s9b8y.css';
import '../../css/j/jd5857_ex.css';
import '../../css/n/n1cxkybip.css';
import '../../css/n/npw8u-bon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ia92s9b8y"/><path class="jd5857_ex"/><path class="n1cxkybip"/><path class="npw8u-bon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:castle-6"} {...others} />);
}

export default Component;
