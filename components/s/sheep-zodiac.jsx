import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zdxv5xb3f.css';
import '../../css/q/qcyr5r9hl.css';
import '../../css/e/ei_pmrbyx.css';
import '../../css/d/dsz32ft8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="zdxv5xb3f"/><path class="qcyr5r9hl"/><path class="ei_pmrbyx"/><path class="dsz32ft8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sheep-zodiac"} {...others} />);
}

export default Component;
