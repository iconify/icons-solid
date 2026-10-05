import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h0brju0li.css';
import '../../css/m/maasf2urd.css';
import '../../css/s/s-ip73bot.css';
import '../../css/r/rjopkyb3f.css';
import '../../css/s/std-qtycv.css';
import '../../css/o/oz_i4xb2j.css';
import '../../css/q/qxpw2tb6l.css';
import '../../css/n/nlx6z4b2p.css';
import '../../css/z/z513r99mr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="h0brju0li"/><path class="maasf2urd"/><path class="s-ip73bot"/><path class="rjopkyb3f"/><path class="std-qtycv"/><path class="oz_i4xb2j"/><path class="qxpw2tb6l"/><path class="nlx6z4b2p"/><path class="z513r99mr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:sun"} {...others} />);
}

export default Component;
