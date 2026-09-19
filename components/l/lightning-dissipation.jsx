import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjls1k5-l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xjls1k5-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:lightning-dissipation"} {...others} />);
}

export default Component;
