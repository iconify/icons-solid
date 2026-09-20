import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xf22utbom.css';
import '../../css/c/cos2dib7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xf22utbom"/><path class="cos2dib7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:peace-symbol"} {...others} />);
}

export default Component;
