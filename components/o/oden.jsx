import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/segz-4tuc.css';
import '../../css/e/ebowwesiq.css';
import '../../css/h/hu5kiacua.css';
import '../../css/t/txs22upzl.css';
import '../../css/y/ylxxmlz6c.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="segz-4tuc"/><path class="ebowwesiq"/><path class="hu5kiacua"/><path class="txs22upzl"/><path class="ylxxmlz6c"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oden"} {...others} />);
}

export default Component;
