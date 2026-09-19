import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f32n5-7hk.css';
import '../../css/h/hu6m7zbrv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="f32n5-7hk"/><circle class="hu6m7zbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:led-diode"} {...others} />);
}

export default Component;
