import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o2-q97b1m.css';
import '../../css/l/l4ickqxsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o2-q97b1m"/><path class="l4ickqxsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:slide-show-play"} {...others} />);
}

export default Component;
