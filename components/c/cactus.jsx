import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyfe__5ov.css';
import '../../css/i/izee4xbjj.css';
import '../../css/t/tdt98o_hr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jyfe__5ov"/><path class="izee4xbjj"/><path class="tdt98o_hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cactus"} {...others} />);
}

export default Component;
