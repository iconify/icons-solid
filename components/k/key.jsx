import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fo6ckckbm.css';
import '../../css/r/r1jovh7-n.css';
import '../../css/d/dejibwb3i.css';
import '../../css/y/y-cvv-mml.css';
import '../../css/w/wnt_kzr_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fo6ckckbm wm-shadow"/><path class="r1jovh7-n wm-shadow"/><path class="dejibwb3i"/><path class="y-cvv-mml"/><path class="wnt_kzr_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:key"} {...others} />);
}

export default Component;
