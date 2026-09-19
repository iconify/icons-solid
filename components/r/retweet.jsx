import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yolb2c1_c.css';
import '../../css/r/rvcb4bedk.css';
import '../../css/y/y-7m_e66k.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="yolb2c1_c"/><path class="rvcb4bedk"/><path class="y-7m_e66k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:retweet"} {...others} />);
}

export default Component;
