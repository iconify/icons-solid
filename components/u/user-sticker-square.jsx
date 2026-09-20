import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sv9oakb6w.css';
import '../../css/q/qqn2qgbhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sv9oakb6w"/><path class="qqn2qgbhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:user-sticker-square"} {...others} />);
}

export default Component;
