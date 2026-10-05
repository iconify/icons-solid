import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/dzmruz_hf.css';
import '../../css/y/yhbz8hrrw.css';
import '../../css/n/nyjsafbqt.css';
import '../../css/x/xutjimb4i.css';
import '../../css/j/jpv7mlb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="dzmruz_hf"/><path class="yhbz8hrrw"/><path class="nyjsafbqt"/><path class="xutjimb4i"/><path class="jpv7mlb9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:grid-3x3"} {...others} />);
}

export default Component;
