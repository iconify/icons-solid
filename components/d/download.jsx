import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pe-9es50i.css';
import '../../css/e/e4rf4ybtc.css';
import '../../css/b/b1yfy4bkn.css';
import '../../css/o/o-du-vbfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pe-9es50i wm-shadow"/><path class="e4rf4ybtc wm-shadow"/><path class="b1yfy4bkn"/><path class="o-du-vbfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:download"} {...others} />);
}

export default Component;
