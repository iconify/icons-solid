import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjh0piecs.css';
import '../../css/t/tiru1tbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjh0piecs"/><path class="tiru1tbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:user-voice"} {...others} />);
}

export default Component;
