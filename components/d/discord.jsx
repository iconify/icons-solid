import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhrhusb_u.css';
import '../../css/g/gm9kkhhxn.css';
import '../../css/j/je-2a8buv.css';
import '../../css/r/r17x52v8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhrhusb_u"/><path class="gm9kkhhxn"/><path class="je-2a8buv"/><path class="r17x52v8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:discord"} {...others} />);
}

export default Component;
