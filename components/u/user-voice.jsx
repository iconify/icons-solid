import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yiet4yv0k.css';
import '../../css/t/tiru1tbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yiet4yv0k"/><path class="tiru1tbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:user-voice"} {...others} />);
}

export default Component;
