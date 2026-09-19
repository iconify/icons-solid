import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ble6zil6f.css';
import '../../css/c/ci3cjlbtq.css';
import '../../css/q/qaswhccgj.css';
import '../../css/m/mimybo5-r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ble6zil6f"/><path class="ci3cjlbtq"/><path class="qaswhccgj"/><path class="mimybo5-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:timer-2"} {...others} />);
}

export default Component;
