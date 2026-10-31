import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sz_-nw8dx.css';
import '../../css/b/b8c4b0rpv.css';
import '../../css/t/tm62-bbnb.css';
import '../../css/b/bthi438oe.css';
import '../../css/i/ium7w9hws.css';
import '../../css/q/qnm29cbab.css';
import '../../css/q/q9052uavi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sz_-nw8dx wm-shadow"/><path class="b8c4b0rpv"/><path class="tm62-bbnb"/><path class="bthi438oe"/><path class="ium7w9hws"/><path class="qnm29cbab"/><path class="q9052uavi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-boy"} {...others} />);
}

export default Component;
