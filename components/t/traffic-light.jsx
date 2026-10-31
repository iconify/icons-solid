import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xga7jrb_o.css';
import '../../css/f/fl7kq9drs.css';
import '../../css/z/zowtjgbcv.css';
import '../../css/b/br52c-b9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xga7jrb_o"/><path class="fl7kq9drs wm-shadow"/><path class="zowtjgbcv"/><path class="br52c-b9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:traffic-light"} {...others} />);
}

export default Component;
