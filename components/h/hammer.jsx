import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z08y1bcpn.css';
import '../../css/b/bh140t6kr.css';
import '../../css/f/ffk-nebfy.css';
import '../../css/o/oqoijq82d.css';
import '../../css/y/y5y92yget.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z08y1bcpn"/><path class="bh140t6kr wm-shadow"/><path class="ffk-nebfy"/><path class="oqoijq82d"/><path class="y5y92yget"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hammer"} {...others} />);
}

export default Component;
