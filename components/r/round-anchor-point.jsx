import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bwfefv7qk.css';
import '../../css/r/re8btit-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bwfefv7qk"/><path class="re8btit-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:round-anchor-point"} {...others} />);
}

export default Component;
