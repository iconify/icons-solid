import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xr15-witw.css';
import '../../css/r/r7-p8vbgy.css';
import '../../css/s/s_178t27e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="xr15-witw"/><path class="r7-p8vbgy"/><path class="s_178t27e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:crib"} {...others} />);
}

export default Component;
