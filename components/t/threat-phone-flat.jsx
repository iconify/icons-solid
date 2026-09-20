import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urvl__but.css';
import '../../css/g/gbuy8qbtc.css';
import '../../css/x/x1olz2duw.css';
import '../../css/v/vaw605b_n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="urvl__but"/><path clip-rule="evenodd" class="gbuy8qbtc"/><path class="x1olz2duw"/><path clip-rule="evenodd" class="vaw605b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:threat-phone-flat"} {...others} />);
}

export default Component;
