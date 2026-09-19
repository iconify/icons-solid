import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1_setxkq.css';
import '../../css/b/bu8lizbbx.css';
import '../../css/l/l9ibikb1j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g1_setxkq"/><path class="bu8lizbbx"/><path class="l9ibikb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:rocket"} {...others} />);
}

export default Component;
