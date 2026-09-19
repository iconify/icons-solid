import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/h/h2d1uzdoc.css';
import '../../css/d/dn9_f7ejl.css';
import '../../css/e/ebfeu-bpq.css';
import '../../css/w/wvk-vobrf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="h2d1uzdoc"/><path class="dn9_f7ejl"/><path class="ebfeu-bpq"/><path class="wvk-vobrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:switching-done"} {...others} />);
}

export default Component;
