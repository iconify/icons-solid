import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouu8bvb1i.css';
import '../../css/y/y_c478bvf.css';
import '../../css/q/qeu06ul3f.css';
import '../../css/k/kzf3xhn_u.css';
import '../../css/c/c1se0cckk.css';
import '../../css/q/q8et1acbe.css';
import '../../css/y/yvtax7b2u.css';
import '../../css/f/f87akob-o.css';
import '../../css/r/rfnl5konr.css';
import '../../css/v/v5ra9dbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ouu8bvb1i wm-s"/><path class="wm-s y_c478bvf"/><path class="qeu06ul3f wm-s"/><path class="kzf3xhn_u wm-k"/><path class="c1se0cckk wm-k"/><path class="q8et1acbe wm-k"/><path class="wm-shine yvtax7b2u"/><path class="f87akob-o wm-k"/><path class="rfnl5konr wm-k"/><path class="v5ra9dbwc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:siren"} {...others} />);
}

export default Component;
