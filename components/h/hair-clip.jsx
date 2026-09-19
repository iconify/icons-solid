import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rnrwwphky.css';
import '../../css/c/c5c45-bwn.css';
import '../../css/s/sz4h7_bkz.css';
import '../../css/o/ont_6k0ft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rnrwwphky"/><path class="c5c45-bwn"/><path class="sz4h7_bkz"/><path class="ont_6k0ft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hair-clip"} {...others} />);
}

export default Component;
