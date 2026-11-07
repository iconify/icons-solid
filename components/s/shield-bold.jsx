import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r62347llr.css';
import '../../css/s/s9_132ctu.css';
import '../../css/q/qdt5y7bmn.css';
import '../../css/v/v7zy9tb3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r62347llr"/><path class="s9_132ctu"/><path class="qdt5y7bmn"/><path class="v7zy9tb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-bold"} {...others} />);
}

export default Component;
