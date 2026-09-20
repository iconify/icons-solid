import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a9-iglbdi.css';
import '../../css/i/ibe-yt9mi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a9-iglbdi"/><path class="ibe-yt9mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:phone-message"} {...others} />);
}

export default Component;
