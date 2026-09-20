import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh7i2l54q.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="kh7i2l54q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:night-alt-snow-thunderstorm"} {...others} />);
}

export default Component;
