import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fxn87v4vx.css';
import '../../css/t/tz1j7bbth.css';
import '../../css/o/ovnv7qxik.css';
import '../../css/o/oivujhbti.css';
import '../../css/t/tpsjsfbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fxn87v4vx wm-shadow"/><path class="tz1j7bbth wm-shadow"/><path class="ovnv7qxik"/><path class="oivujhbti"/><path class="tpsjsfbwq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:phone-incoming"} {...others} />);
}

export default Component;
