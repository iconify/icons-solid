import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j-b44cxaf.css';
import '../../css/b/bn6rf-kvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j-b44cxaf"/><path class="bn6rf-kvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:snooze-clock"} {...others} />);
}

export default Component;
