import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sp8fwf3vd.css';
import '../../css/w/wibscwbbe.css';
import '../../css/f/f0301js9j.css';
import '../../css/y/yvj0k1b9t.css';
import '../../css/a/ae-5bzb2f.css';
import '../../css/w/wxm7j4bwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sp8fwf3vd"/><path class="wibscwbbe"/><path class="f0301js9j"/><rect class="yvj0k1b9t"/><rect class="ae-5bzb2f"/><path class="wxm7j4bwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:desk-device-pc"} {...others} />);
}

export default Component;
