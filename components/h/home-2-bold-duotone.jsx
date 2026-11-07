import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jglmwo91y.css';
import '../../css/s/swvwx0b5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jglmwo91y"/><path class="swvwx0b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-2-bold-duotone"} {...others} />);
}

export default Component;
