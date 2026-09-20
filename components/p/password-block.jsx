import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/ho4_h-bkz.css';
import '../../css/v/v0ttfpbfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ho4_h-bkz"/><path class="v0ttfpbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:password-block"} {...others} />);
}

export default Component;
