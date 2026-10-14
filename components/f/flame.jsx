import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r3286_bry.css';
import '../../css/y/y46dqcb-q.css';
import '../../css/c/cwb8ybbis.css';
import '../../css/i/i6bzhdl5z.css';
import '../../css/v/v2czcgbml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="r3286_bry"/><path class="y46dqcb-q"/><path class="cwb8ybbis"/><path class="i6bzhdl5z"/><path class="v2czcgbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:flame"} {...others} />);
}

export default Component;
