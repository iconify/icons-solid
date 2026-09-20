import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wn3i1h2cj.css';
import '../../css/o/o5udrp96x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wn3i1h2cj"/><path class="o5udrp96x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:middle-click"} {...others} />);
}

export default Component;
