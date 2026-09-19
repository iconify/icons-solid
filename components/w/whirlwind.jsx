import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qbsx6nwvy.css';
import '../../css/u/u35230b0d.css';
import '../../css/d/d3i11ojwr.css';
import '../../css/v/v2z08vbwf.css';
import '../../css/i/i8tzp7bmz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qbsx6nwvy"/><path class="u35230b0d"/><path class="d3i11ojwr"/><path class="v2z08vbwf"/><path class="i8tzp7bmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:whirlwind"} {...others} />);
}

export default Component;
