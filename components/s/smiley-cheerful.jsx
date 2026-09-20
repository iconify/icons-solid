import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ura5j9k2q.css';
import '../../css/w/wuyn-hbnm.css';
import '../../css/j/j4j4l59bi.css';
import '../../css/f/fd2adrbod.css';
import '../../css/e/eyi05tp7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ura5j9k2q"/><path class="wuyn-hbnm"/><path class="j4j4l59bi"/><path class="fd2adrbod"/><path class="eyi05tp7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smiley-cheerful"} {...others} />);
}

export default Component;
